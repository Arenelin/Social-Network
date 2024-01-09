import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';

export type ChatData = {
    id: number
    authorName: string
    lastMessage: string,
    date: string
}

export type PostType = {
    id: number
    title: string
    likesCount: number
}

const posts: PostType[] = [
    {id: 0, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
    {id: 1, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
    {id: 2, title: ' consectetur adipisicing elit.', likesCount: 14},
    {id: 3, title: 'Adipisci cupiditate deserunt', likesCount: 2},
    {id: 4, title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
    {id: 5, title: '  reiciendis repellendus sed temporibus?', likesCount: 8},
]

export const chats: ChatData[] = [
    {
        id: 1,
        authorName: 'Darya Akmaykina',
        lastMessage: 'How are you?',
        date: '25 Mar 2023'
    },
    {
        id: 2,
        authorName: 'Nikita Akmaykin',
        lastMessage: 'I am a developer!',
        date: '18 Sep 2023'
    },
    {
        id: 3,
        authorName: 'Alexey Akmaykin',
        lastMessage: 'I go to home',
        date: '31 Dec 2023'
    },
]

ReactDOM.render(
    <>
        <GlobalStyle/>
        <App posts={posts} chats={chats}/>
    </>,

    document.getElementById('root')
);