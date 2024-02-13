import './index.css';
import {store} from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';
import {Provider} from 'react-redux';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <Provider store={store}>
                <App/>
            </Provider>

        </>,
        document.getElementById('root')
    );
}
const subscriber = () => {
    rerenderEntireTree()
}

rerenderEntireTree()

store.subscribe(subscriber)


