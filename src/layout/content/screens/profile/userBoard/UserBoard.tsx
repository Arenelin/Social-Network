import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {AppRootAction} from '../../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';

type UserBoardProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {store} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts store={store}/>
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
