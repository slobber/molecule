import { BaseService } from 'mo/glue';
import { ExtensionModel } from 'mo/models/extension';
import { ILocale } from 'mo/models/locale';
import { IContribute, IContributeType, IExtension, IMoleculeContext, UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import { inject, injectable } from 'tsyringe';

import type { ActivityBarService } from './activityBar';
import type { AuxiliaryBarService } from './auxiliaryBar';
import { BuiltinService } from './builtin';
import type { ContextMenuService } from './contextMenu';
import type { ExplorerService } from './explorer';
import type { FolderTreeService } from './folderTree';
import type { LayoutService } from './layout';
import type { LocaleService } from './locale';
import type { MenuBarService } from './menuBar';
import type { SidebarService } from './sidebar';
import type { StatusBarService } from './statusBar';

export interface IExtensionService {
    /**
     * Add the extensions to ExtensionService
     * @param extensions The Extensions wait to added
     */
    add(extensions: IExtension[]): void;
    /**
     * Get an extension by the ID
     * @param id The extension ID
     */
    getExtension(id: UniqueId): IExtension | undefined;
    /**
     * Get All extensions
     * @return Extension Array
     */
    getAllExtensions(): IExtension[];
    /**
     * Dispose the specific extension, and remove it from the ExtensionService
     * @param extensionId The extension id is required
     */
    dispose(extensionId: UniqueId): void;
    /**
     * Dispose all extensions, and reset the ExtensionService
     */
    disposeAll(): void;
    /**
     * Disable to activate some extensions, make use of it to filter some
     * extensions no need to activate. You need register the inactive event before the MoleculeProvider declaration.
     * @example
     * ```ts
     *  molecule.extension.inactive((extension: IExtension) => {
     *      if (/^(idA|idB)$/.test(extension.id)) {
     *          return true;
     *      }
     *  });
     *  <MoleculeProvider extensions={[]}></MoleculeProvider>
     * ```
     * @param predicate The predicate function
     */
    inactive(predicate: (extension: IExtension) => boolean): void;
    /**
     * Register a new action which is extends the Action2, and return a disposable instance.
     * @example
     * ```ts
     * const action = class Action extends Action2 {};
     * const disposableAction = registerAction(action);
     * disposableAction.dispose(); // Dispose the action
     * ```
     * @param ctor The action class
     * @return IDisposable The Disposable instance
     */
    // registerAction(ctor: { new (): Action2 }): IDisposable;
    /**
     * Execute the registered command
     * @param id The command ID
     * @param args
     */
    // executeCommand(id: string, ...args: any): void;
    /**
     * Reset the extensions to `[]`
     */
    reset(): void;
    /**
     * Distinguish the language extensions from extensions
     * @param extensions
     * @returns [ languagesExts, otherExtensions ]
     */
    // splitLanguagesExts(extensions: IExtension[]): [IExtension[], IExtension[]];
}

@injectable()
export class ExtensionService extends BaseService<ExtensionModel> implements IExtensionService {
    protected state: ExtensionModel;
    private _predicate: (extension: IExtension) => boolean = () => true;
    constructor(
        @inject('locale') private locale: LocaleService,
        @inject('builtin') private builtin: BuiltinService,
        @inject('contextMenu') private contextMenu: ContextMenuService,
        @inject('auxiliaryBar') private auxiliaryBar: AuxiliaryBarService,
        @inject('layout') private layout: LayoutService,
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('menuBar') private menuBar: MenuBarService,
        @inject('activityBar') private activityBar: ActivityBarService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('explorer') private explorer: ExplorerService,
        @inject('folderTree') private folderTree: FolderTreeService
    ) {
        super();
        this.state = new ExtensionModel();
    }

    private getContext = (): IMoleculeContext => {
        return {
            locale: this.locale,
            builtin: this.builtin,
            contextMenu: this.contextMenu,
            auxiliaryBar: this.auxiliaryBar,
            layout: this.layout,
            statusBar: this.statusBar,
            menuBar: this.menuBar,
            activityBar: this.activityBar,
            sidebar: this.sidebar,
            explorer: this.explorer,
            folderTree: this.folderTree,
        };
    };

    private isExtension(extension: any): extension is IExtension {
        if (!extension) return false;
        return (
            typeof extension === 'object' &&
            ['activate', 'id', 'name'].every((property) => property in extension)
        );
    }

    public getExtension(id: UniqueId): IExtension | undefined {
        return this.state.data.find(searchById(id));
    }

    public reset(): void {
        this.setState(new ExtensionModel());
    }

    public getAllExtensions(): IExtension[] {
        return this.state.data.concat();
    }

    public inactive(predicate: (extension: IExtension) => boolean): void {
        this._predicate = predicate;
    }

    public add(extensions: IExtension[]): void {
        if (!Array.isArray(extensions)) return;

        // Adding extensions into state
        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...extensions],
        }));
        this.load();
    }

    private load() {
        const extensions = this.getAllExtensions();
        if (!Array.isArray(extensions)) return;

        const ctx = this.getContext();
        extensions.filter(this._predicate).forEach((extension) => {
            if (!this.isExtension(extension)) return;

            extension.activate(ctx);

            if (extension.contributes) {
                this.loadContributes(extension.contributes);
            }
        });
    }

    private loadContributes(contributes: IContribute) {
        const contributeKeys = Object.keys(contributes);
        contributeKeys.forEach((type: string) => {
            switch (type) {
                case IContributeType.Themes: {
                    // const themes: IColorTheme[] | undefined = contributes[type];
                    // if (!themes) return;
                    // return this.colorThemeService.addThemes(themes);
                    break;
                }
                case IContributeType.Languages: {
                    const locales: ILocale[] | undefined = contributes[type];
                    if (!Array.isArray(locales)) return;
                    this.locale.addLocales(locales);
                }
            }
        });
    }

    public dispose(extensionId: UniqueId): void {
        const ctx = this.getContext();
        const extension = this.getExtension(extensionId);
        if (extension) {
            extension.dispose?.(ctx);
            this.setState((prev) => ({
                ...prev,
                data: prev.data.filter((ext) => ext !== extension),
            }));
        }
    }

    public disposeAll() {
        const extensions = this.getAllExtensions();
        extensions.forEach((ext) => {
            const ctx = this.getContext();
            ext.dispose?.(ctx);
        });
        this.reset();
    }
}
