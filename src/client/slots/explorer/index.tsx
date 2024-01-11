import { Collapse } from 'mo/client/components';
import useConnector from 'mo/client/hooks/useConnector';
import type { IExplorerController } from 'mo/controllers/explorer';
import { sortByIndex } from 'mo/utils';

export type IExplorerProps = IExplorerController;

export default function Explorer({ onToolbarClick, onCollapseChange, onContextMenu }: IExplorerProps) {
    const explorer = useConnector('explorer');
    const data = explorer.data.concat().sort(sortByIndex);

    if (!data.length) return null;

    return (
        <Collapse
            data={data}
            observer
            activePanelKeys={explorer.active}
            onCollapseChange={onCollapseChange}
            onToolbarClick={onToolbarClick}
            onContextMenu={onContextMenu}
        />
    );
}
