import React from 'react';
import { Resizable, Enable } from 're-resizable';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { usePage } from '@hooks';
import { useInitElement } from './hooks';
import useEditState, { useEditStateProvider } from './hooks/useEditState';
import css from './index.module.less';
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    id: string;
    defaultProps?: React.CSSProperties,
    noBorder?: boolean,
    needResize?: boolean,
    enable?: Enable
}
// interface ResizeableWrapperProps {
//     children: any;
//     open: boolean;
//     [props: string]: Resizable;
// }
// const store = {};
const funcs = {
    begin: (mintor: DragSourceMonitor) => console.log('begin', mintor),
    end: (item: any, mintor: DragSourceMonitor) =>
        console.log('end', item, mintor),
};
const box = {
    type: 'card',
};

export default function EditElementWrapper({ children, id, defaultProps, needResize, noBorder, enable }: Props) {
    const page = usePage();
    const conf = { page, id };
    useInitElement(conf, defaultProps);
    const [Provider, useEditStateDefault] = useEditStateProvider(conf);
    const [{ width, height, ...style }, updater] = useEditStateDefault();
    return (
        <div style={style} >
            <Provider value={useEditStateDefault}>
                {
                    enable || needResize ? (
                        <Resizable
                            className={cn(css.resizable, {[css.noBorder]: noBorder})}
                            size={{ width, height }}
                            onResize={(e) => {
                                e.preventDefault();
                            }}
                            enable={enable}
                            onResizeStop={(e, direction, ref, d) => {
                                updater({
                                    width: width + d.width,
                                    height: height + d.height,
                                });
                            }}
                        >
                            {children}
                        </Resizable>
                    ) : children
                }
            </Provider>
        </div>
        );
}
export { useEditState };
