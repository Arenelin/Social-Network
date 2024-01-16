import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/state';

type AppProps = {
    state: RootStateType
    addPost:(postMessage:string)=>void
}

const App: React.FC<AppProps> = (props) => {
    const {state,addPost} = props;
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content addPost={addPost} state={state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;