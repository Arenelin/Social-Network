import {UserActivity} from './UserActivity';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {ProfilePageType} from '../../../../../redux/reducers/profileReducer';

type MapStateType = Omit<ProfilePageType, 'posts'>

export type UserActivityProps = MapStateType

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        friends: state.profilePage.friends
    }
}
export const UserActivityContainer =
    connect(mapStateToProps, {})(UserActivity)