import React from 'react';
import {AllUserPosts} from './AllUserPosts';
import {StoreContext} from '../../../../../../../../context/StoreContext';

type AllUserProps = {}

export const AllUserPostsContainer: React.FC<AllUserProps> = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const posts = store.getState().profilePage.posts.addedPosts
                return <AllUserPosts posts={posts}/>
            }}
        </StoreContext.Consumer>
    )
};