import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter} from 'react-router-dom';
import {AppRootAction, RootStateType} from './redux/store';
import {AppRootReducerType} from './redux/redux-store';
import {EmptyObject, Store} from 'redux';

type AppProps = {
    state: RootStateType
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

const App: React.FC<AppProps> = (props) => {
    const {state, store} = props;
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content state={state} store={store}/>
            </div>
        </BrowserRouter>
    );
}

export default App;