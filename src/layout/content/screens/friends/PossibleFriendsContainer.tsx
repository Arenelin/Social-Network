import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppRootReducerType} from '../../../../redux/redux-store';
import {addFriend, setPossibleFriends, unfriend} from '../../../../redux/reducers/possibleFriendsReducer';
import {PossibleFriends} from './PossibleFriends/PossibleFriends';
import {UserDomainType} from '../../../../api/users-api';

export type PossibleFriendsProps = MapStateType & MapDispatchType

type MapStateType = {
    possibleFriends: UserDomainType[]
}
type MapDispatchType = {
    addFriend: (userId: number) => void
    unfriend: (userId: number) => void
    setPossibleFriends: (users: UserDomainType[]) => void
}

const mapStateToProps = (state: AppRootReducerType): MapStateType => {
    return {
        possibleFriends: state.possibleFriends
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend: (userId: number) => dispatch(addFriend(userId)),
        unfriend: (userId: number) => dispatch(unfriend(userId)),
        setPossibleFriends: (users: UserDomainType[]) => dispatch(setPossibleFriends(users))
    }
}

export const PossibleFriendsContainer =
    connect(mapStateToProps, mapDispatchToProps)(PossibleFriends)