import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {SearchChat} from './searchChat/SearchChat';
import {Chats} from './chats/Chats';
import {ChatData} from '../../../../../index';

type ChatsBoardProps = {
    chats: ChatData[]
}

export const ChatsBoard: React.FC<ChatsBoardProps> = (props) => {
    const {chats} = props;
    return (
        <StyledChatsBoard>
            <GeneralBlockWrapper>
                <SearchChat/>
                <Chats chats={chats}/>
            </GeneralBlockWrapper>
        </StyledChatsBoard>
    );
};

const StyledChatsBoard = styled.div``