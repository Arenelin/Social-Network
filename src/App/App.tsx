import React from 'react';
import '../App.css';
import {Content} from '../layout/content/Content';
import {HashRouter} from 'react-router-dom';
import {HeaderContainer} from "../layout/header/HeaderContainer";

type AppProps = {}

const App: React.FC<AppProps> = () => {
    return (
        <HashRouter>
            <div className="App">
                <HeaderContainer/>
                <Content/>
            </div>
        </HashRouter>
    );
}

export default App;