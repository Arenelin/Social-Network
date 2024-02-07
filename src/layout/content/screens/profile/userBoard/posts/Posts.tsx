import React from 'react';
import styled from 'styled-components';
import {UserPosts} from './userPosts/UserPosts';
import {UserFormPostContainer} from './userFormPost/UserFormPostContainer';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType} from '../../../../../../redux/redux-store';

type PostsProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {store} = props;
    return (
        <StyledPost>
            <UserFormPostContainer store={store}/>
            <UserPosts store={store}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``