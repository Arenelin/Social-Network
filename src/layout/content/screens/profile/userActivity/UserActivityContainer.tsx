import {UserActivity} from './UserActivity';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {FriendType} from '../../../../../redux/reducers/profileReducer';

type MapStateType = {
    friends: FriendType[]
}

export type UserActivityProps = MapStateType
const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        friends: state.profilePage.friends
    }
}
export const UserActivityContainer =
    connect(mapStateToProps, {})(UserActivity)