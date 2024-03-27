import {UserResponseType} from "../../../../../api/users-api";
import {AppRootReducerType} from "../../../../../redux/redux-store";
import {setUserProfile} from "../../../../../redux/reducers/profileReducer";
import {toggleFetchStatus} from "../../../../../redux/reducers/possibleFriendsReducer";
import {connect} from "react-redux";
import {WithUrlDataContainer} from "./WithUrlDataContainer/WithUrlDataContainer";

// types
export type UserProfileProps = MapStateType & MapDispatchType
type MapStateType = {
    userProfile: UserResponseType | null
    isFetching: boolean
}
type MapDispatchType = {
    setUserProfile: (userProfile: UserResponseType) => void
    toggleFetchStatus: (status: boolean) => void
}

// data
const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.possibleFriends.isFetching
    }
}
export const UserProfileContainer =
    connect(mapStateToProps, {setUserProfile, toggleFetchStatus})(WithUrlDataContainer)