import {connect} from "react-redux";
import {PossibleFriendProfileAPIContainer} from "./PossibleFriendProfileAPIContainer/PossibleFriendProfileAPIContainer";
import {AppRootReducerType} from "../../../../../../../../redux/redux-store";
import {UserResponseType} from "../../../../../../../../api/users-api";
import {setUserProfile} from "../../../../../../../../redux/reducers/profileReducer";
import {toggleFetchStatus} from "../../../../../../../../redux/reducers/possibleFriendsReducer";

// types
export type PossibleFriendsProfileProps = MapStateType & MapDispatchType
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
export const PossibleFriendProfileContainer =
    connect(mapStateToProps, {setUserProfile, toggleFetchStatus})(PossibleFriendProfileAPIContainer)