import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {PostType} from '../../../../../redux/state';

type UserBoardProps = {
    posts: PostType[]
    currentPostMessage:string
    dispatch:(action:any)=>void
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {posts, currentPostMessage,dispatch} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts posts={posts}
                   currentPostMessage={currentPostMessage}
                   dispatch={dispatch}
            />
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
