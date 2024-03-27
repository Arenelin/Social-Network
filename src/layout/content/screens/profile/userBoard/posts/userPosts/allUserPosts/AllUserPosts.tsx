import React from 'react';
import {UserPost} from './userPost/UserPost';
import styled from 'styled-components';
import {PlaceholderNoPosts} from './placeholderNoPosts/PlaceholderNoPosts';
import {AllUserProps} from './AllUserPostsContainer';

export const AllUserPosts: React.FC<AllUserProps> = (props) => {
    const {posts,currentUser} = props;

    return (
        <StyledAllUserPosts>
            {posts.length
                ? posts.map(p =>
                    <UserPost key={p.id} message={p.title} likesCount={p.likesCount} currentUser={currentUser}/>)
                : <PlaceholderNoPosts/>}
        </StyledAllUserPosts>
    );
};

const StyledAllUserPosts = styled.div``