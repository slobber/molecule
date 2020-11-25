import * as React from 'react';
import { useCallback } from 'react';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Scrollable } from 'mo/components/scrollable';
import { TabSwicher, Tab } from './tab';
import TabButton from './tabButton';
import './style.scss';

export interface ITab {
    id?: number | string;
    name?: string; // fileName
    activeTab?: number; // activeTab
    modified?: boolean; // modify file
}
export interface ITabsProps {
    data: ITab[];
    closeTab?: (item: ITab) => void;
    onMoveTab?: (tabs: ITab[]) => void;
    selectTab?: (index: number) => void;
    // onMoveTab: (dragIndex?: number, hoverIndex?: number | string) => void;
    onTabChange: (index: number) => void;
}

const DraggleTabs = (props: ITabsProps) => {
    const { data, onMoveTab, selectTab } = props;

    const onMoveTab = useCallback(
        (dragIndex, hoverIndex) => {
            const dragTab = data[dragIndex];
            onMoveTab?.(
                update(data, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragTab],
                    ],
                })
            );
        },
        [data]
    );

    const onTabClick = (key) => {
        console.log(`onTabClick ${key}`);
        selectTab?.(key);
    };

    const onTabClose = (item: ITab) => {};
    return (
        <DndProvider backend={HTML5Backend}>
            <Scrollable>
                <TabSwicher className="tab-switcher">
                    {data?.map((item: ITab, index: number) => (
                        <Tab
                            onMoveTab={onMoveTab}
                            onTabChange={onTabClick}
                            index={index}
                            id={item.id}
                        >
                            <TabButton
                                key={item.id}
                                name={item.name}
                                modified={item.modified}
                                active={item.activeTab === index}
                                onClose={() => onTabClose(item)}
                                className={'tab-button'}
                            />
                        </Tab>
                    ))}
                </TabSwicher>
            </Scrollable>
        </DndProvider>
    );
};

export default DraggleTabs;
