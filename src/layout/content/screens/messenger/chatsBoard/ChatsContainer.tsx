import React from 'react';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType} from '../../../../../redux/redux-store';
import {Chats} from './chats/Chats';

type ChatsProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

export const ChatsContainer: React.FC<ChatsProps> = (props) => {
    const {store} = props;
    const chats = store.getState().chats

    return <Chats chats={chats}/>
};