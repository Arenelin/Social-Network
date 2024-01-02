import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {SearchChat} from './searchChat/SearchChat';
import {Chats} from './chats/Chats';

export const ChatsBoard = () => {
    return (
        <StyledChatsBoard>
            <GeneralBlockWrapper>
                <SearchChat/>
                <Chats/>
            </GeneralBlockWrapper>
        </StyledChatsBoard>
    );
};

const StyledChatsBoard = styled.div``