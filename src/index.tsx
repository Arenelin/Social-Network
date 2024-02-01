import './index.css';
import {RootStateType, store} from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)