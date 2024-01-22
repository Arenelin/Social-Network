import './index.css';
import {addPost, changeCurrentPostMessage, RootStateType, state, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App addPost={addPost} state={state} changeCurrentPostMessage={changeCurrentPostMessage}/>
        </>,

        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)