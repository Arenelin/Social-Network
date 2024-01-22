import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {PostType} from '../../../../../../redux/state';

type PostsProps = {
    posts: PostType[]
    addPost: () => void
    changeCurrentPostMessage: (symbol:string)=> void
    currentPostMessage:string
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts, addPost, changeCurrentPostMessage, currentPostMessage} = props;
    return (
        <StyledPost>
            <UserFormPost addPost={addPost} changeCurrentPostMessage={changeCurrentPostMessage} currentPostMessage={currentPostMessage}/>
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``