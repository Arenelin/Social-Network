import React from 'react';
import {AppRootAction} from '../../../../../../../redux/store';
import {addPost, changePostMessage} from '../../../../../../../redux/profileReducer';
import {UserFormPost} from './UserFormPost';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../../../redux/redux-store';

type UserFormPostProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
};

export const UserFormPostContainer: React.FC<UserFormPostProps> = (props) => {
    const {store} = props;
    const currentPostMessage = store.getState().profilePage.posts.currentPostMessage
    const dispatch = store.dispatch
    const changeMessageOfPost = (value: string) => {
        dispatch(changePostMessage(value));
    };
    const addNewPost = () => {
        dispatch(addPost());
    };

    return (
        <UserFormPost
            currentPostMessage={currentPostMessage}
            changeMessageOfPost={changeMessageOfPost}
            addNewPost={addNewPost}
        />
    );
};