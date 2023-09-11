import type { CSSProperties, PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import { Direction } from 'mo/types';

import { ScrollBar } from '../scrollBar';
import variables from './index.scss';

interface IHeaderProps {
    extra?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    extraClassName?: string;
    trackStyle?: CSSProperties;
}

export default function Header({
    className,
    contentClassName,
    extraClassName,
    extra,
    trackStyle,
    children,
}: PropsWithChildren<IHeaderProps>) {
    return (
        <div className={classNames(variables.header, className)}>
            <div className={classNames(variables.content, contentClassName)}>
                <ScrollBar trackStyle={trackStyle} direction={Direction.horizontal}>
                    {children}
                </ScrollBar>
            </div>
            {!!extra && <div className={classNames(variables.extra, extraClassName)}>{extra}</div>}
        </div>
    );
}
