import {UserDomainType} from '../../api/users-api';

// types
export type PossibleFriendsActions =
    | ReturnType<typeof addFriend>
    | ReturnType<typeof unfriend>
    | ReturnType<typeof setPossibleFriends>

const initialState: UserDomainType[] = []

// reducer
export const possibleFriendsReducer = (state: UserDomainType[] = initialState, action: PossibleFriendsActions): UserDomainType[] => {
    switch (action.type) {
        case 'ADD-AS-FRIEND':
            return state.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
        case 'UNFRIEND':
            return state.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
        case 'SET-POSSIBLE-FRIENDS':
            debugger
            return [...state, ...action.payload.users]
        default:
            return state
    }
}

// actions
export const addFriend = (userId: number) => {
    return {type: 'ADD-AS-FRIEND', payload: {userId}} as const
}
export const unfriend = (userId: number) => {
    return {type: 'UNFRIEND', payload: {userId}} as const
}
export const setPossibleFriends = (users: UserDomainType[]) => {
    return {type: 'SET-POSSIBLE-FRIENDS', payload: {users}} as const
}