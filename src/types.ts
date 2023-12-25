import type React from 'react';
import type { editor, KeyCode } from 'monaco-editor';

import type { ILocale } from './models/locale';
import type { ActionService } from './services/action';
import type { ActivityBarService } from './services/activityBar';
import type { AuxiliaryBarService } from './services/auxiliaryBar';
import type { BuiltinService } from './services/builtin';
import type { ColorThemeService } from './services/colorTheme';
import type { ContextMenuService } from './services/contextMenu';
import type { EditorService } from './services/editor';
import type { EditorTreeService } from './services/editorTree';
import type { ExplorerService } from './services/explorer';
import type { FolderTreeService } from './services/folderTree';
import type { LayoutService } from './services/layout';
import type { LocaleService } from './services/locale';
import type { MenuBarService } from './services/menuBar';
import type { MonacoService } from './services/monaco';
import type { NotificationService } from './services/notification';
import type { OutputService } from './services/output';
import type { PanelService } from './services/panel';
import type { SearchService } from './services/search';
import type { SettingsService } from './services/setting';
import type { SidebarService } from './services/sidebar';
import type { StatusBarService } from './services/statusBar';
import type { TreeNodeModel } from './utils/tree';

export type RequiredId<T extends { id: UniqueId }> = Partial<T> & Required<Pick<T, 'id'>>;

export type BuiltinTheme = editor.BuiltinTheme;

export type RecordWithId<T> = { id: UniqueId; [key: string]: any } & T;

export type TreeModel<T> = RecordWithId<{ children?: T[] }>;

/**
 * The type definition for the each iterable item
 */
export interface IItemProps {
    id: UniqueId;
    name?: string;
    hidden?: boolean;
    icon?: IconType;
    sortIndex?: number;
    // TODO: check disabled
    disabled?: boolean;
}

export interface ISimpleKeybinding {
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    keyCode: KeyCode;
}

export enum KeybindingWeight {
    EditorCore = 0,
    EditorContrib = 100,
    WorkbenchContrib = 200,
    BuiltinExtension = 300,
    ExternalExtension = 400,
}

/**
 * The Alignment of layout
 */
export enum Alignment {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right',
}
export type AlignmentLiteral = keyof typeof Alignment;

/**
 * The Direction of layout
 */
export enum Direction {
    vertical = 'vertical',
    horizontal = 'horizontal',
}
export type DirectionLiteral = keyof typeof Direction;

/**
 * The FolderTree types
 */
export enum FileTypes {
    File = 'File',
    Folder = 'Folder',
    RootFolder = 'RootFolder',
}
export type FileTypeLiteral = keyof typeof FileTypes;

export interface HTMLElementProps {
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    role?: string;
}

export type UniqueId = string | number;

export interface IContext {
    molecule: {
        contextMenu: ContextMenuService;
        auxiliaryBar: AuxiliaryBarService;
        layout: LayoutService;
        statusBar: StatusBarService;
        locale: LocaleService;
        builtin: BuiltinService;
        menuBar: MenuBarService;
        activityBar: ActivityBarService;
        sidebar: SidebarService;
        explorer: ExplorerService;
        folderTree: FolderTreeService;
        panel: PanelService;
        output: OutputService;
        editor: EditorService;
        colorTheme: ColorThemeService;
        action: ActionService;
        editorTree: EditorTreeService;
        notification: NotificationService;
        search: SearchService;
        settings: SettingsService;
    };
    monaco: MonacoService;
    controllers: Record<string, any>;
    modules: Map<string, Factory>;
    localize: Localize;
}

export type Factory = ReturnType<Parameters<typeof React.lazy>[0]>;

export type IMoleculeContext = IContext['molecule'];

export type Functional<T> = (prev: T) => T;
export type FunctionalOrSingle<T> = T | ((prev: T) => T);
export type ArraylizeOrSingle<T> = T[] | T;

export type WithHiddenProperty<T extends object | void> = T extends void
    ? { hidden: boolean }
    : T & { hidden: boolean };

/**
 * Returns the international text located by source key，or the default value if it is not find
 * For examples:
 * ```ts
 * localize('id','default value'); // hello ${i}, ${i}
 * localize('id','default value', 'world'); // hello world, ${i}
 * localize('id','default value', 'world', 'molecule'); // hello world, molecule
 * ```
 * @param sourceKey The key value located in the source international text
 * @param defaultValue The default value to be used when not find the international text
 * @param args If provided, it will used as the values to be replaced in the international text
 * @returns
 */
export type Localize = (sourceKey: string, defaultValue: string, ...args: any[]) => string;

// https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
export type IconType = string | JSX.Element;

/**
 * Context Menu types
 */
export interface IMenuItemProps extends TreeModel<IMenuItemProps> {
    /**
     * The name of icon
     */
    icon?: IconType;
    type?: 'divider';
    /**
     * the grouping of menu items.
     */
    group?: 'inline';
    /**
     * Item Name
     */
    name?: string;
    disabled?: boolean;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItemProps) => React.ReactNode;
    sortIndex?: number;
    symbolic?: UniqueId;
}

/**
 * Defines extension types
 */
export enum IExtensionType {
    Theme = 'Themes',
    Normal = 'normal',
    Settings = 'settings',
    Locals = 'locales',
    Menus = 'menus',
    Workbench = 'workbench',
}

export enum IContributeType {
    Languages = 'languages',
    Commands = 'commands',
    Configuration = 'configuration',
    Grammar = 'grammars',
    Themes = 'themes',
    IconTheme = 'iconThemes',
    Modules = 'modules',
}

/**
 * Color scheme used by the OS and by color themes.
 */
export enum ColorScheme {
    DARK = 'dark',
    LIGHT = 'light',
    HIGH_CONTRAST = 'hc',
}

export type ColorSchemeLiteral = Lowercase<keyof typeof ColorScheme>;

export interface IContribute {
    [IContributeType.Languages]?: ILocale[];
    [IContributeType.Commands]?: any[];
    // [IContributeType.Configuration]?: any;
    // [IContributeType.Grammar]?: any;
    [IContributeType.Themes]?: IColorTheme[];
    [IContributeType.Modules]?: Record<string, Factory>;
    // [IContributeType.IconTheme]?: IIconTheme[];
}

/**
 * The interface of extension,
 * there need every extension to implement this interface
 */
export interface IExtension {
    /**
     * The ID of extension required
     */
    id: UniqueId;
    /**
     * The name of extension
     */
    name: string;
    /**
     * The display name of extension
     */
    displayName?: string;
    /**
     * The version of extension
     */
    version?: string;
    /**
     * The categories of extension
     */
    categories?: IExtensionType[];
    /**
     * The kind of extension
     */
    extensionKind?: IExtensionType[];
    /**
     * The main file path of extension
     * Extension system will load the extension by this file
     */
    contributes?: IContribute;
    /**
     * The entry of extension
     */
    main?: string;
    /**
     * The Icon of extension
     */
    icon?: IconType;
    /**
     * The description of extension
     */
    description?: string;
    /**
     * The publisher of extension
     */
    publisher?: string;
    /**
     * The path of extension
     */
    path?: string;
    /**
     * Whether disable current extension, the extension default status is enable
     */
    disable?: boolean;
    /**
     * Do something you want when the Extension is activating.
     * The ExtensionService will call the `activate` method after
     * added the Extension instance.
     * @param ctx The Context of Extension instance
     */
    activate(ctx: IMoleculeContext, monaco: MonacoService): void;
    /**
     * Do something when the Extension disposing.
     * For example, you can recover the UI state, or remove the Objects in memory.
     * @param ctx The Context of Extension instance
     */
    dispose?(ctx: IMoleculeContext): void;
}

/**
 * Extend the parameters for a function
 */
export type ExtendParameters<T, Arguments extends any[]> = T extends (...args: infer P) => infer R
    ? (...args: [...P, ...Arguments]) => R
    : never;

export type ContextMenuEventHandler = (item: IMenuItemProps) => void;
export type ContextMenuEditorHandler = ExtendParameters<
    ContextMenuEventHandler,
    [tabId: UniqueId, groupId: UniqueId]
>;
export type ContextMenuGroupHandler = ExtendParameters<
    ContextMenuEventHandler,
    [groupId: UniqueId]
>;

export type RenderProps<T> = {
    render?: RenderFunctionProps<T>;
};
export type RenderFunctionProps<T> = (item: T) => React.ReactNode;

/**
 * The type definition for the Tab data construct
 */
export interface ITabProps<T = any, P = any> extends RenderProps<ITabProps<T, P>>, IItemProps {
    /**
     * Mark the tab status to be closable,
     * Default is true
     */
    closable?: boolean;
    data?: T;
}

export interface IBreadcrumbItemProps extends RenderProps<IBreadcrumbItemProps> {
    id: UniqueId;
    name: string;
    icon?: IconType;
}

export type IEditorOptions = editor.IEditorOptions;

/**
 * validate status
 */
export enum ValidateStatus {
    info = 'info',
    warning = 'warning',
    error = 'error',
    validating = 'validating',
}
export type ValidateStatusLiteral = keyof typeof ValidateStatus;

/**
 * validate status for input
 */
export type InputValidateInfo = {
    status: ValidateStatusLiteral;
    message: string;
};

type ISearchResultData = {
    language: string;
    value: string;
    breadcrumb: string[];
};
export type SearchResultItem = TreeNodeModel<ISearchResultData>;
export type KeyboardEventHandler<T> = ExtendParameters<
    React.KeyboardEventHandler<T>,
    [treeNode: TreeNodeModel<any>]
>;

export type FocusEventHandler<T> = ExtendParameters<
    React.FocusEventHandler<T>,
    [treeNode: TreeNodeModel<any>]
>;

export type IPosition = {
    x: number;
    y: number;
};

export type ContextMenuHandler = (position: IPosition) => void;
export type ContextMenuWithItemHandler<T extends any[]> = ExtendParameters<ContextMenuHandler, T>;

export type Predict<T> = (data: T) => Partial<T>;

// ========== ActivityBar Types ==========
export interface ITopActivityBarItem
    extends HTMLElementProps,
        IItemProps,
        RenderProps<IActivityBarItem> {
    alignment: 'top';
}

export interface IBottomActivityBarItem
    extends HTMLElementProps,
        IItemProps,
        RenderProps<IActivityBarItem> {
    alignment: 'bottom';
    contextMenu?: IMenuItemProps[];
}

export type IActivityBarItem = ITopActivityBarItem | IBottomActivityBarItem;

// ========== Color Themes ==========
export interface TokenColor {
    name?: string;
    scope?: string | string[];
    settings?: Record<string, string>;
}

export interface IColorTheme {
    /**
     * The id of component, theme will be applied by this ID
     */
    id: UniqueId;
    label: string;
    name?: string;
    uiTheme?: BuiltinTheme;
    description?: string;
    type?: ColorScheme;
    colors?: Record<string, string | null>;
    tokenColors?: TokenColor[];
    /**
     * The semanticTokenColors mappings as well as
     * the semanticHighlighting setting
     * allow to enhance the highlighting in the editor
     * More info visit: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
     */
    semanticHighlighting?: boolean;
}
// ========== Editor ==========

export interface IEditorTab<T>
    extends RenderProps<IEditorTab<T>>,
        Pick<IItemProps, 'id' | 'name' | 'icon'> {
    model?: editor.ITextModel;
    value?: string;
    language?: string;
    breadcrumb?: IBreadcrumbItemProps[];
    modified?: boolean;
    data?: T;
}

export type TabGroup = { tabId: UniqueId; groupId: UniqueId };
