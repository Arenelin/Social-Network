import React from 'react';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {AppRootAction} from '../../../../../redux/store';
import {Chats} from './chats/Chats';

type ChatsProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const ChatsContainer: React.FC<ChatsProps> = (props) => {
    const {store} = props;
    const chats = store.getState().messengerPage.chats

    return (
        <Chats chats={chats}/>
    );
};