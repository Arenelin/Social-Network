import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {AllActionsType, AppRootReducerType} from './redux/redux-store';
import {EmptyObject, Store} from 'redux';
import {HashRouter} from 'react-router-dom';

type AppProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

const App: React.FC<AppProps> = (props) => {
    const {store} = props;
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Content store={store}/>
            </div>
        </HashRouter>
    );
}

export default App;