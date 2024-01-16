import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {PostType} from '../../../../../../redux/state';

type PostsProps = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts, addPost} = props;
    return (
        <StyledPost>
            <UserFormPost addPost={addPost}/>
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``