import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {PostType} from '../../../../../redux/state';

type UserBoardProps = {
    posts: PostType[]
    addPost:(postMessage:string)=>void
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {posts, addPost} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts posts={posts} addPost={addPost}/>
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
