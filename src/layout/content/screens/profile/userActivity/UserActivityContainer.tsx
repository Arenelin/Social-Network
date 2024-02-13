import {UserActivity} from './UserActivity';
import {AppRootReducerType} from '../../../../../redux/redux-store';
import {connect} from 'react-redux';
import {ProfilePageType} from '../../../../../redux/profileReducer';
import {Dispatch} from 'redux';

type MapStateType = Omit<ProfilePageType, 'posts'>

export type UserActivityProps = MapStateType

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        friends: state.profilePage.friends
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export const UserActivityContainer =
    connect(mapStateToProps, mapDispatchToProps)(UserActivity)