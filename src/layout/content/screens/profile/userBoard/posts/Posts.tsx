import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {PostType} from '../../../../../../index';

type PostsProps = {
    posts: PostType[]
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts} = props;
    return (
        <StyledPost>
            <UserFormPost/>
            <UserPosts posts={posts}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``