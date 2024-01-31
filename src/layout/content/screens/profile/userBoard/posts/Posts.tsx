import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {PostType} from '../../../../../../redux/state';

type PostsProps = {
    posts: PostType[]
    currentPostMessage:string
    dispatch:(action:any)=>void
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts, currentPostMessage,dispatch} = props;
    return (
        <StyledPost>
            <UserFormPost
                currentPostMessage={currentPostMessage}
                dispatch={dispatch}
            />
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``