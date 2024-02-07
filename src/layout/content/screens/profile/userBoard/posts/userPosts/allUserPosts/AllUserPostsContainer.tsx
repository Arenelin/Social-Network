import React from 'react';
import {AppRootAction} from '../../../../../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../../../../redux/redux-store';
import {AllUserPosts} from './AllUserPosts';

type AllUserProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const AllUserPostsContainer: React.FC<AllUserProps> = (props) => {
    const {store} = props;
    const posts = store.getState().profilePage.posts.addedPosts

    return <AllUserPosts posts={posts}/>
};