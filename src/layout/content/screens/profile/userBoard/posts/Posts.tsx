import React from 'react';
import styled from 'styled-components';
import {UserPosts} from './userPosts/UserPosts';
import {AppRootAction, PostType} from '../../../../../../redux/store';
import {UserFormPostContainer} from './userFormPost/UserFormPostContainer';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../../redux/redux-store';

type PostsProps = {
    posts: PostType[]
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts, store} = props;
    return (
        <StyledPost>
            <UserFormPostContainer store={store}/>
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``