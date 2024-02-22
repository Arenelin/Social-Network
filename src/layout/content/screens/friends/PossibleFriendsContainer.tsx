import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';
import {
    addFriend,
    PossibleFriendsType,
    removeFromListPossibleFriends,
    unfriend
} from '../../../../redux/reducers/possibleFriendsReducer';
import {PossibleFriends} from './PossibleFriends/PossibleFriends';

export type PossibleFriendsProps = MapStateType & MapDispatchType

type MapStateType = {
    possibleFriends: PossibleFriendsType[]
}
type MapDispatchType = {
    addFriend: (userId: string) => void
    unfriend: (userId: string) => void
    removeUserFromList: (userId: string) => void
}

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        possibleFriends: state.possibleFriends
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend: (userId: string) => dispatch(addFriend(userId)),
        unfriend: (userId: string) => dispatch(unfriend(userId)),
        removeUserFromList: (userId: string) => dispatch(removeFromListPossibleFriends(userId))
    }
}

export const PossibleFriendsContainer =
    connect(mapStateToProps, mapDispatchToProps)(PossibleFriends)