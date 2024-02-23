export type PossibleFriendsType = {
    id: string
    firstName: string
    lastName: string
    avatar: string
    mutualFriends: string[]
    isAddedFriend: boolean
}

const initialState: PossibleFriendsType[] = []

export const possibleFriendsReducer = (state: PossibleFriendsType[] = initialState, action: PossibleFriendsActions): PossibleFriendsType[] => {
    switch (action.type) {
        case 'ADD-AS-FRIENDS': {
            return state.map(u => u.id === action.payload.userId ? {...u, isAddedFriend: true} : u)
        }
        case 'UNFRIEND': {
            return state.map(u => u.id === action.payload.userId ? {...u, isAddedFriend: false} : u)
        }
        case 'REMOVE-FROM-LIST-POSSIBLE-FRIENDS': {
            return state.filter(u => u.id !== action.payload.userId)
        }
        case 'SET-POSSIBLE-FRIENDS': {
            return [...state, ...action.payload.users]
        }
        default:
            return state
    }
}

export type PossibleFriendsActions = AddFriend | Unfriend | RemoveFromListPossibleFriends | SetPossibleFriends
type AddFriend = ReturnType<typeof addFriend>
type Unfriend = ReturnType<typeof unfriend>
type RemoveFromListPossibleFriends = ReturnType<typeof removeFromListPossibleFriends>
type SetPossibleFriends = ReturnType<typeof setPossibleFriends>

export const addFriend = (userId: string) => {
    return {type: 'ADD-AS-FRIENDS', payload: {userId}} as const
}
export const unfriend = (userId: string) => {
    return {type: 'UNFRIEND', payload: {userId}} as const
}
export const removeFromListPossibleFriends = (userId: string) => {
    return {type: 'REMOVE-FROM-LIST-POSSIBLE-FRIENDS', payload: {userId}} as const
}
export const setPossibleFriends = (users: PossibleFriendsType[]) => {
    return {type: 'SET-POSSIBLE-FRIENDS', payload: {users}} as const
}