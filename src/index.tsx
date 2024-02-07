import './index.css';
import {AppRootReducerType, store} from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

const rerenderEntireTree = (state: AppRootReducerType) => {
    debugger
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App store={store}/>
        </>,
        document.getElementById('root')
    );
}
const subscriber = () => {
    const actualState = store.getState()
    rerenderEntireTree(actualState)
}

rerenderEntireTree(store.getState())

store.subscribe(subscriber)


