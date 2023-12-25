import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';

export const Posts = () => {
    return (
        <StyledPost>
            <UserFormPost/>
            <UserPosts/>
        </StyledPost>
    );
};

const StyledPost = styled.div``