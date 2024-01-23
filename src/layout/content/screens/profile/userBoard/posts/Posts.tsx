import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {PostType, store} from '../../../../../../redux/state';

type PostsProps = {
    posts: PostType[]
    // addPost: () => void
    // changeCurrentPostMessage: (symbol:string)=> void
    store: any
    currentPostMessage:string
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts,store, currentPostMessage} = props;
    return (
        <StyledPost>
            <UserFormPost store={store} currentPostMessage={currentPostMessage}/>
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``