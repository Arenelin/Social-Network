import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {AppRootAction, PostType} from '../../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';

type UserBoardProps = {
    posts: PostType[]
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {posts, store} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts posts={posts} store={store}/>
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
