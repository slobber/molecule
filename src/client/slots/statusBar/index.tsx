import Flex from 'mo/client/components/flex';
import Prevent from 'mo/client/components/prevent';
import useConnector from 'mo/client/hooks/useConnector';
import type { IStatusBarController } from 'mo/controllers/statusBar';
import { Alignment } from 'mo/types';
import { classify, sortByIndex } from 'mo/utils';

import StatusItem from '../../components/statusItem';
import variables from './index.scss';

export default function StatusBar({ onClick, onContextMenu }: IStatusBarController) {
    const statusBar = useConnector('statusBar');

    const [leftItems = [], rightItems = []] = classify(
        statusBar.data,
        (item) => item.alignment === Alignment.left
    );

    return (
        <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY })}>
            <Flex className={variables.container} justifyContent="space-between">
                <Flex className={variables.items} justifyContent="flex-start">
                    {leftItems.sort(sortByIndex).map((item) => (
                        <StatusItem
                            key={item.id}
                            data={item}
                            onClick={(e) => onClick?.(e, item.id)}
                            onContextMenu={onContextMenu}
                        />
                    ))}
                </Flex>
                <Flex className={variables.items} justifyContent="flex-end">
                    {rightItems
                        .sort(sortByIndex)
                        .reverse()
                        .map((item) => (
                            <StatusItem
                                key={item.id}
                                data={item}
                                onClick={(e) => onClick?.(e, item.id)}
                                onContextMenu={onContextMenu}
                            />
                        ))}
                </Flex>
            </Flex>
        </Prevent>
    );
}