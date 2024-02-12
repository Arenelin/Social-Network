import React from 'react';
import {Chats} from './chats/Chats';
import {StoreContext} from '../../../../../context/StoreContext';

type ChatsProps = {}

export const ChatsContainer: React.FC<ChatsProps> = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const chats = store.getState().chats
                return <Chats chats={chats}/>
            }}
        </StoreContext.Consumer>
    )
};