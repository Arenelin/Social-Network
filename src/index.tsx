import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';
import {state} from './redux/state'
import {addPost} from './redux/state'

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App addPost={addPost} state={state}/>
    </>,

    document.getElementById('root')
);