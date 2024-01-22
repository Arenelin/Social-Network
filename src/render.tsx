import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';
import {addPost, changeCurrentPostMessage,RootStateType} from './redux/state';

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App addPost={addPost} state={state} changeCurrentPostMessage={changeCurrentPostMessage}/>
        </>,

        document.getElementById('root')
    );
}