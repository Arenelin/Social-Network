import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Content} from './layout/content/Content';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {UniversalButton} from './components/buttons/UniversalButton';
import {Icon} from './components/icon/Icon';
import {ChatData, chats, PostType} from './index';

type AppProps = {
    posts: PostType[]
    chats: ChatData[]
}

const App: React.FC<AppProps> = (props) => {
    const {posts, chats} = props;
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Content posts={posts} chats={chats}/>
            </div>
        </BrowserRouter>
    );
}

export default App;