import React from 'react';
import styled from 'styled-components';
import {UserPosts} from './userPosts/UserPosts';
import {UserFormPostContainer} from './userFormPost/UserFormPostContainer';

type PostsProps = {}

export const Posts: React.FC<PostsProps> = () => {

    return (
        <StyledPost>
            <UserFormPostContainer/>
            <UserPosts/>
        </StyledPost>
    );
};

const StyledPost = styled.div``