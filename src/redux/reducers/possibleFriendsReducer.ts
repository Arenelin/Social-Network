import {UserDomainType} from '../../api/users-api';

// types
export type PossibleFriendsActions =
    | ReturnType<typeof addFriend>
    | ReturnType<typeof unfriend>
    | ReturnType<typeof setPossibleFriends>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleFetchStatus>

type InitialStateType = {
    users: UserDomainType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

// reducer
export const possibleFriendsReducer = (state: InitialStateType = initialState, action: PossibleFriendsActions): InitialStateType => {
    switch (action.type) {
        case 'ADD-AS-FRIEND':
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: true}
                    : u)
            }
        case 'UNFRIEND':
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId
                    ? {...u, followed: false}
                    : u)
            }
        case 'SET-POSSIBLE-FRIENDS':
            return {
                // ...state, users: action.payload.users.map(u => ({...u, isFetching: false}))
                ...state, users: action.payload.users
            }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.payload.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.status}
        default:
            return state
    }
}

// actions
export const addFriend = (userId: number) =>
    ({type: 'ADD-AS-FRIEND', payload: {userId}} as const)

export const unfriend = (userId: number) =>
    ({type: 'UNFRIEND', payload: {userId}} as const)

export const setPossibleFriends = (users: UserDomainType[]) =>
    ({type: 'SET-POSSIBLE-FRIENDS', payload: {users}} as const)

export const setCurrentPage = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', payload: {currentPage}} as const)

export const setTotalCount = (totalCount: number) =>
    ({type: 'SET-TOTAL-COUNT', payload: {totalCount}} as const)

export const toggleFetchStatus = (status: boolean) =>
    ({type: 'TOGGLE-IS-FETCHING', payload: {status}} as const)
