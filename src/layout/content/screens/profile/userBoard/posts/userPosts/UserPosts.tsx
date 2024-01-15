import React from 'react';
import styled from 'styled-components';
import {NavigationUserPosts} from './navigationUserPosts/NavigationUserPosts';
import {AllUserPosts} from './allUserPosts/AllUserPosts';
import {PostType} from '../../../../../../../redux/state';

type UserPostsProps = {
    posts: PostType[]
}

export const UserPosts: React.FC<UserPostsProps> = (props) => {
    const {posts} = props;

    return (
        <StyledUserPosts>
            <NavigationUserPosts/>
            <AllUserPosts posts={posts}/>
        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``