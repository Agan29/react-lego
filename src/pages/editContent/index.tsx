import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { useSelfReducer } from '@hooks';
import { usePageProvider } from '@hooks/usePage';
import {
    useEditState,
} from '@components/editElementWrapper';
import {AttrPanel} from '@components';
import Box from '@components/Box';
import PageCollapse from '@widgets/pageCollapse';
import List from '@components/List';
import CarouselCom from '@components/carousel';
import css from './index.module.less';
import { Button, Upload } from 'antd';
import axios from 'axios';
import FreeContainer from '@components/freeContainer';
import TextContainer from '@components/Text';
// const { id, mod } = process.env;
// function APP() {
//     return mod === 'edit' ? editRouter : previewRoter;
// }
// const { data } = reqRouters();

function Demo() {
    const [{ background = 'black' }, updater] = useEditState();
    return (
        <div className={css.test} style={{ background }}>
            颜色可编辑：
            <input
                type="text"
                onBlur={(e) => updater({ background: e.target.value })}
            />
        </div>
    );
}
Demo.editFields = ['width', 'height', 'background'];

function ButtonDemo() {
    const [{ width, height, text = '按钮', link = '#'}] = useEditState();
    
    return (
        // <Link to={link}>
            <Button style={{width, height}} type="primary">{text}</Button>
        // </Link>
    );
}
ButtonDemo.editFields = ['width', 'height', 'text', 'link'];
ButtonDemo.defaultProps = {
    width: 64,
    height: 32
}
const defaultPageValue: {} = {
    list: [],
};
const App: React.FC<{}> = (props) => {
    const [currentSection, selectSection] = useState({id: '', editFields: []});
    const [PageProvider, page] = usePageProvider('page', defaultPageValue);
    const dispatch = useDispatch();
    const state = useSelfReducer((state) => state[page]);
    console.log('------>currentSection', state, currentSection);
    const list = state.list;
    const changeCardList = useCallback(
        (newList) => {
            dispatch({
                type: 'update_list',
                page,
                data: newList,
            });
        },
        [dispatch, page],
    );
    const handleOnChange = (...arg: any) => {
        console.log(arg)
    };
    return (
        <PageProvider>
            <Box
                elementType={Demo}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个box~
            </Box>
            <Box
                accept={'item'}
                elementType={ButtonDemo}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个Button
            </Box>
            <Box
                containerType="free"
                elementType={FreeContainer}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个FreeContainer
            </Box>
            <Box
                elementType={CarouselCom}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个CarouselCom
            </Box>
            <Box
                accept={'item'}
                elementType={TextContainer}
                cardList={list}
                changeCardList={changeCardList}
            >
                点我可以拖个Text
            </Box>
            <List cardList={list} changeCardList={changeCardList} handleSelect={selectSection} />
            {/* <DragDemo>
               {getEditCom('demo', Demo)}
            </DragDemo> */}
            {/* <PageCollapse /> */}    
            <AttrPanel {...currentSection} />
            <Upload
                accept="image/*"
                action="/api/upload"
            >
                <Button type="primary">上传</Button>
            </Upload>
        </PageProvider>
    );
};

export default App;
