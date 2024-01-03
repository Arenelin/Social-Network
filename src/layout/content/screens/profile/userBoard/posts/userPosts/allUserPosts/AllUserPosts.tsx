import React from 'react';
import {UserPost} from './userPost/UserPost';
import styled from 'styled-components';
import {PlaceholderNoPosts} from './placeholderNoPosts/PlaceholderNoPosts';

export type PostType = {
    id: number
    title: string
    likesCount: number
}

type AllUserProps = {
    posts: PostType[]
}

export const AllUserPosts: React.FC<AllUserProps> = (props) => {
    const {posts} = props;

    return (
        <StyledAllUserPosts>
            {posts.length
                ? posts.map(p =>
                    <UserPost key={p.id} message={p.title} likesCount={p.likesCount}/>)
                : <PlaceholderNoPosts/>}
        </StyledAllUserPosts>
    );
};

const StyledAllUserPosts = styled.div``