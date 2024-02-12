import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {SearchChat} from './searchChat/SearchChat';
import {ChatsContainer} from './ChatsContainer';

type ChatsBoardProps = {}

export const ChatsBoard: React.FC<ChatsBoardProps> = () => {

    return (
        <StyledChatsBoard>
            <GeneralBlockWrapper>
                <SearchChat/>
                <ChatsContainer />
            </GeneralBlockWrapper>
        </StyledChatsBoard>
    );
};

const StyledChatsBoard = styled.div``