import React from 'react';
import styled from 'styled-components';
import {NavigationUserPosts} from './navigationUserPosts/NavigationUserPosts';
import {AppRootAction} from '../../../../../../../redux/store';
import {AllUserPostsContainer} from './allUserPosts/AllUserPostsContainer';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../../../redux/redux-store';

type UserPostsProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const UserPosts: React.FC<UserPostsProps> = (props) => {
    const {store} = props;

    return (
        <StyledUserPosts>
            <NavigationUserPosts/>
            <AllUserPostsContainer store={store}/>
        </StyledUserPosts>
    );
};

const StyledUserPosts = styled.div``