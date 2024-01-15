import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppProps = {
    state: RootStateType
}

const App: React.FC<AppProps> = (props) => {
    const {state} = props;
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content state={state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;