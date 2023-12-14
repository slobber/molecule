import ActionBar from 'mo/client/components/actionBar';
import Flex from 'mo/client/components/flex';
import Prevent from 'mo/client/components/prevent';
import Progress from 'mo/client/components/progress';
import useConnector from 'mo/client/hooks/useConnector';
import { ISideBarController } from 'mo/controllers/sidebar';
import { searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export default function Sidebar({ onToolbarClick, onContextMenu }: ISideBarController) {
    const sidebar = useConnector('sidebar');

    const pane = sidebar.panes.find(searchById(sidebar.current));

    if (!pane) return <div className={variables.container} />;

    const toolbar = (pane.toolbar || []).concat().sort(sortByIndex);

    return (
        <Prevent
            className={variables.container}
            onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, pane)}
        >
            {/* FIXME: support keep-alive */}
            <div className={variables.pane}>
                <Flex className={variables.header} justifyContent="space-between">
                    <div className={variables.title}>
                        <h2 title={typeof pane.name === 'string' ? pane.name : undefined}>
                            {pane.name}
                        </h2>
                    </div>
                    {!!toolbar.length && (
                        <Prevent className={variables.toolbar}>
                            <ActionBar
                                data={toolbar}
                                onClick={(item) => onToolbarClick?.(item, pane.id)}
                            />
                        </Prevent>
                    )}
                </Flex>
                <Prevent className={variables.content}>
                    <Progress active={sidebar.loading} />
                    {pane.render?.()}
                </Prevent>
            </div>
        </Prevent>
    );
}
