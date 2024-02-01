import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {SearchChat} from './searchChat/SearchChat';
import {Chats} from './chats/Chats';
import {MessengerPageType} from '../../../../../redux/store';

type ChatsBoardProps = {
    state: MessengerPageType
}

export const ChatsBoard: React.FC<ChatsBoardProps> = (props) => {
    const {state} = props;
    return (
        <StyledChatsBoard>
            <GeneralBlockWrapper>
                <SearchChat/>
                <Chats chats={state.chats}/>

            </GeneralBlockWrapper>
        </StyledChatsBoard>
    );
};

const StyledChatsBoard = styled.div``