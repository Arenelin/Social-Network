import React from 'react';
import {UserPost} from './userPost/UserPost';
import styled from 'styled-components';
import {PlaceholderNoPosts} from './placeholderNoPosts/PlaceholderNoPosts';

export type PostType = {
    id: number
    title: string
    likesCount: number
}

type AllUserPropsType = {
    posts: PostType[]
}

export const AllUserPosts = (props: AllUserPropsType) => {
    return (
        <StyledAllUserPosts>
            {props.posts.length
                ? props.posts.map(p =>
                    <UserPost key={p.id} message={p.title} likesCount={p.likesCount}/>)
                : <PlaceholderNoPosts/>}
        </StyledAllUserPosts>
    );
};

const StyledAllUserPosts = styled.div``