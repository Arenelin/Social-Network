import React from 'react';
import {UserActivity} from './UserActivity';
import {StoreContext} from '../../../../../context/StoreContext';

type UserActivityProps = {}

export const UserActivityContainer: React.FC<UserActivityProps> = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const friends = store.getState().profilePage.friends
                return <UserActivity friends={friends}/>
            }}
        </StoreContext.Consumer>
    )
};