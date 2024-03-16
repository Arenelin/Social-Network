import {connect} from 'react-redux';
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

export const PossibleFriendsContainer =
    connect(mapStateToProps, {
        addFriend,
        unfriend, 
        setPossibleFriends,
        setCurrentPage,
        setTotalCount,
        toggleFetchStatus
    })(PossibleFriendsAPIComponent)