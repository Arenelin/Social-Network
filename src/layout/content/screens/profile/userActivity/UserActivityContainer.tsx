import React from 'react';
import {EmptyObject, Store} from 'redux';
import {AllActionsType, AppRootReducerType} from '../../../../../redux/redux-store';
import {UserActivity} from './UserActivity';

type UserActivityProps = {
    store: Store<EmptyObject & AppRootReducerType, AllActionsType>
}

export const UserActivityContainer: React.FC<UserActivityProps> = (props) => {
    const {store} = props;
    const friends = store.getState().profilePage.friends

    return <UserActivity friends={friends}/>
};