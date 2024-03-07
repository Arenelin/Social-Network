import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';
import {
    addFriend,
    setCurrentPage,
    setPossibleFriends,
    setTotalCount,
    toggleFetchStatus,
    unfriend
} from '../../../../redux/reducers/possibleFriendsReducer';
import {PossibleFriendsAPIComponent} from './PossibleFriends/PossibleFriendsAPIComponent/PossibleFriendsAPIComponent';
import {UserDomainType} from '../../../../api/users-api';

export type PossibleFriendsProps = MapStateType & MapDispatchType

type MapStateType = {
    possibleFriends: UserDomainType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchType = {
    addFriend: (userId: number) => void
    unfriend: (userId: number) => void
    setPossibleFriends: (users: UserDomainType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleFetchStatus: (status: boolean) => void
}

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        possibleFriends: state.possibleFriends.users,
        pageSize: state.possibleFriends.pageSize,
        totalCount: state.possibleFriends.totalCount,
        currentPage: state.possibleFriends.currentPage,
        isFetching: state.possibleFriends.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend: (userId: number) => dispatch(addFriend(userId)),
        unfriend: (userId: number) => dispatch(unfriend(userId)),
        setPossibleFriends: (users: UserDomainType[]) =>
            dispatch(setPossibleFriends(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
        setTotalCount: (totalCount: number) => dispatch(setTotalCount(totalCount)),
        toggleFetchStatus: (status: boolean) => dispatch(toggleFetchStatus(status))
    }
}

export const PossibleFriendsContainer =
    connect(mapStateToProps, mapDispatchToProps)(PossibleFriendsAPIComponent)