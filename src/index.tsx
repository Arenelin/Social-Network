import './index.css';
import {RootStateType} from './redux/store';
import {store} from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

const rerenderEntireTree = (state: RootStateType) => {
    debugger
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
const subscriber = ()=>{
    const actualState = store.getState()
    rerenderEntireTree(actualState)
}

rerenderEntireTree(store.getState())

store.subscribe(subscriber)


