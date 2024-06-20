import { useEffect, useState } from 'react';
import useMeasure from 'react-use/esm/useMeasure';
import type { PosType } from 'mo/types';

export default function useAutoPos<E extends HTMLElement>(
    pos: PosType[],
    split: 'vertical' | 'horizontal' = 'vertical',
    isShowAuxiliaryBar = false,
    isActiveAuxiliaryBar = false
) {
    const [ref, rect] = useMeasure<E>();
    const [state, setState] = useState<number[]>(() => convertAutoToAbsolute(pos, 0));
    const [historyPos, setHistoryPos] = useState<PosType[]>([])

    function convertAutoToAbsolute(data: PosType[], rect: number) {
        const res = [...data];
        let total = rect;
        const autoIndex: number[] = [];
        data.forEach((i, idx) => {
            if (i === 'auto') {
                autoIndex.push(idx);
            } else {
                total -= i;
            }
        });
        const per = total / autoIndex.length;
        autoIndex.forEach((idx) => {
            res[idx] = per;
        });
        return res as number[];
    }

    function getVerticalPos(pos: PosType[]) {
        if (split !== 'vertical') { return pos }
        let verticalPos = [...pos]
        pos.forEach((_, index) => {
            if (isActiveAuxiliaryBar && isShowAuxiliaryBar && pos[index + 1] === undefined) {
                verticalPos[index] = historyPos[index] ?? 300
            }
            if (!isActiveAuxiliaryBar && isShowAuxiliaryBar && pos[index + 1] === undefined) {
                setHistoryPos(pos);
                verticalPos[index] = 25
            }
        })
        return verticalPos
    }

    const size = rect[split === 'vertical' ? 'width' : 'height'];

    useEffect(() => {
        setState(convertAutoToAbsolute(pos, size));
    }, [pos, size]);

    useEffect(() => {
        const curPos = getVerticalPos(pos)
        setState(convertAutoToAbsolute(curPos, size));
    }, [isShowAuxiliaryBar, isActiveAuxiliaryBar])

    function withChange(fn?: (data: PosType[]) => void) {
        return (absolutePos: number[]) => {
            fn?.(
                pos.map((item, idx) => {
                    if (item === 'auto') return 'auto';
                    return absolutePos[idx];
                })
            );
        };
    }

    return [ref, state, withChange] as const;
}
