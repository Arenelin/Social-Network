import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {PostType} from '../../../../../redux/state';

type UserBoardProps = {
    posts: PostType[]
    addPost:()=>void
    changeCurrentPostMessage: (symbol:string)=> void
    currentPostMessage:string
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {posts, addPost, changeCurrentPostMessage, currentPostMessage} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts posts={posts}
                   addPost={addPost}
                   changeCurrentPostMessage={changeCurrentPostMessage}
                   currentPostMessage={currentPostMessage}
            />
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
