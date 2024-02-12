import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {HashRouter} from 'react-router-dom';

type AppProps = {}

const App: React.FC<AppProps> = () => {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Content/>
            </div>
        </HashRouter>
    );
}

export default App;