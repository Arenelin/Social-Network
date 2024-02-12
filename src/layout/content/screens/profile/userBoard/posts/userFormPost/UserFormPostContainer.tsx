import React from 'react';
import {addPost, changePostMessage} from '../../../../../../../redux/profileReducer';
import {UserFormPost} from './UserFormPost';
import {StoreContext} from '../../../../../../../context/StoreContext';

type UserFormPostProps = {};

export const UserFormPostContainer: React.FC<UserFormPostProps> = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const dispatch = store.dispatch
                const currentMessage = store.getState().profilePage.posts.currentPostMessage
                const changeMessageOfPost = (value: string) => {
                    dispatch(changePostMessage(value));
                };
                const addNewPost = () => {
                    dispatch(addPost());
                };

                return <UserFormPost
                    currentPostMessage={currentMessage}
                    changeMessageOfPost={changeMessageOfPost}
                    addNewPost={addNewPost}
                />
            }}
        </StoreContext.Consumer>
    );
};