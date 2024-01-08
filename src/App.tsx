import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {UniversalButton} from './components/buttons/UniversalButton';
import {Icon} from './components/icon/Icon';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;