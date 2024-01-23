import React from 'react';
import styled from 'styled-components';
import {Interests} from './interests/Interests';
import {Posts} from './posts/Posts';
import {PostType, store} from '../../../../../redux/state';

type UserBoardProps = {
    posts: PostType[]
    // addPost:()=>void
    // changeCurrentPostMessage: (symbol:string)=> void
    store: any
    currentPostMessage:string
}

export const UserBoard: React.FC<UserBoardProps> = (props) => {
    const {posts, store, currentPostMessage} = props;
    return (
        <StyledUserBoard>
            <Interests/>
            <Posts posts={posts} store={store} currentPostMessage={currentPostMessage}/>
        </StyledUserBoard>
    );
};

const StyledUserBoard = styled.div``
