import React from 'react';
import styled from 'styled-components';
import {UserFormPost} from './userFormPost/UserFormPost';
import {UserPosts} from './userPosts/UserPosts';
import {AppRootAction, PostType} from '../../../../../../redux/store';
import {Music} from '../../../music/Music/Music';
import {Route} from 'react-router-dom';

type PostsProps = {
    posts: PostType[]
    currentPostMessage: string
    dispatch: (action: AppRootAction) => void
}

export const Posts: React.FC<PostsProps> = (props) => {
    const {posts, currentPostMessage, dispatch} = props;
    return (
        <StyledPost>
            <UserFormPost
                currentPostMessage={currentPostMessage}
                dispatch={dispatch}
            />
            <UserPosts posts={posts}/>
            <Route path="/audios" render={() => <Music/>}/>
        </StyledPost>
    );
};

const StyledPost = styled.div``