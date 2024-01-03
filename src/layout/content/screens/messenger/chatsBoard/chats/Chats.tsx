import React from 'react';
import {ChatData, chatsData} from './chats-data/chats-data';
import {Chat} from './chat/Chat';
import {S} from './Chats_Styles';

export const Chats: React.FC = () => {
    const allChats: JSX.Element[] = chatsData.map((c: ChatData) => {
        return (
            <Chat
                key={c.id}
                id={c.id}
                lastMessage={c.lastMessage}
                authorName={c.authorName}
                date={c.date}
            />
        )
    });

    return (
        <S.Chats>
            {allChats}
        </S.Chats>
    );
};