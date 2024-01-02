import React from 'react';
import styled from 'styled-components';
import {ChatData, chatsData} from './chats-data/chats-data';
import {Chat} from './chat/Chat';

export const Chats = () => {
    const allChats: JSX.Element[] = chatsData.map((c: ChatData) => {
        return (
            <Chat
                key={c.id}
                lastMessage={c.lastMessage}
                authorName={c.authorName}
                date={c.date}
            />
        )});

    return (
        <StyledChats>
            {allChats}
        </StyledChats>
    );
};

const StyledChats = styled.ul`
    min-height: calc(100vh - 130px);
    width: 100%;
`