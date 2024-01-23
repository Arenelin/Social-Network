import './index.css';
import {RootStateType} from './redux/state';
import {store} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App  state={store.getState()} store={store}/>
        </>,

        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
// subscribe(rerenderEntireTree)