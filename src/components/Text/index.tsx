/*
 * @file: 
 * @Author: jiangzichen01
 * @Date: 2021-02-28 16:55:42
 */
import React from 'react';
import cn from 'classnames';
import css from './index.module.less';
import { useEditState } from '../editElementWrapper';

interface TextContainerProps {};
function onPaste(e) {
    e = e || window.event;
    e.preventDefault();
    let text =  (e.originalEvent || e).clipboardData.getData('text/plain') || '';
    document.execCommand("insertText", false, text);
};

const TextContainer = (props: TextContainerProps) => {
    const [{content, ...style}, update] = useEditState();
    function onTextChange(e) {
        var html = e.target.innerHTML;
        console.log(html);
        update({
            content: html
        });
    }
    console.log(style);
    return (
        <div contentEditable={true} style={style} onPaste={onPaste} onInput={onTextChange} dangerouslySetInnerHTML={{__html: style.content}} />
    );
};
TextContainer.defaultProps = {
    color: 'black',
    content: ''
};
export default TextContainer;
