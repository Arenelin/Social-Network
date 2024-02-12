import React from 'react';
import styled from 'styled-components';
import {NavigationUserPosts} from './navigationUserPosts/NavigationUserPosts';
import {AllUserPostsContainer} from './allUserPosts/AllUserPostsContainer';

type UserPostsProps = {}

export const UserPosts: React.FC<UserPostsProps> = () => {

    return (
        <StyledUserPosts>
            <NavigationUserPosts/>
            <AllUserPostsContainer/>
        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``