import React from 'react';
import {Chat} from './chat/Chat';
import {S} from './Chats_Styles';
import {ChatType} from '../../../../../../redux/store';

type ChatsProps = {
    chats: ChatType[]
}

export const Chats: React.FC<ChatsProps> = (props) => {
    const {chats} = props;
    const allChats: JSX.Element[] = chats.map((c: ChatType) => {
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