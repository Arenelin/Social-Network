export type PossibleFriendsType = {
    id: string
    firstName: string
    lastName: string
    avatar: string
    mutualFriends: string[]
    isAddedFriend: boolean
}

const initialState: PossibleFriendsType[] = [
    // {id: v1(), firstName: 'Kristina', lastName: 'Ovsyannikova', avatar: f1, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Anastasia', lastName: 'Sudakina', avatar: f2, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Roman', lastName: 'Azarov', avatar: f3, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Leonid', lastName: 'Gempel', avatar: f4, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Evgeny', lastName: 'Andreev', avatar: f5, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Marina', lastName: 'Bantser', avatar: f6, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Ekaterina', lastName: 'Feyn', avatar: f7, mutualFriends: [], isAddedFriend: false},
    // {id: v1(), firstName: 'Natasha', lastName: 'Vlasova', avatar: f8, mutualFriends: [], isAddedFriend: false},
]


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