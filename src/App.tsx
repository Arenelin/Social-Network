import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType, store} from './redux/state';

type AppProps = {
    state: RootStateType
    store: any
    // addPost: () => void
    // changeCurrentPostMessage: (symbol: string) => void
}

const App: React.FC<AppProps> = (props) => {
    const {state, store } = props;
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content store={store} state={state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;