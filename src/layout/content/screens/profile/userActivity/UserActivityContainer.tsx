import React from 'react';
import {AppRootAction} from '../../../../../redux/store';
import {EmptyObject, Store} from 'redux';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {UserActivity} from './UserActivity';

type UserActivityProps = {
    store: Store<EmptyObject & AppRootReducerType, AppRootAction>
}

export const UserActivityContainer: React.FC<UserActivityProps> = (props) => {
    const {store} = props;
    const friends = store.getState().profilePage.friends

    return <UserActivity friends={friends}/>
};