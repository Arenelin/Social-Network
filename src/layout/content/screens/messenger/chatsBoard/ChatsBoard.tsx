import React from 'react';
import styled from 'styled-components';
import {GeneralBlockWrapper} from '../../../../../components/blockWrappers/generalBlockWrapper/GeneralBlockWrapper';
import {SearchChat} from './searchChat/SearchChat';
import {AppRootAction} from '../../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {ChatsContainer} from './ChatsContainer';

type ChatsBoardProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const ChatsBoard: React.FC<ChatsBoardProps> = (props) => {
    const {store} = props;
    return (
        <StyledChatsBoard>
            <GeneralBlockWrapper>
                <SearchChat/>
                <ChatsContainer store={store}/>
            </GeneralBlockWrapper>
        </StyledChatsBoard>
    );
};

const StyledChatsBoard = styled.div``