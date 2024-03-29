import {v1} from 'uuid';
import f1 from '../../assets/images/friend1.jpg';
import f2 from '../../assets/images/friend2.jpg';
import f3 from '../../assets/images/friend3.jpg';
import f4 from '../../assets/images/friend4.jpg';
import f5 from '../../assets/images/friend5.jpg';
import f6 from '../../assets/images/friend6.jpg';
import f7 from '../../assets/images/friend7.jpg';
import f8 from '../../assets/images/friend8.jpg';
import {UserResponseType} from "../../api/users-api";

// types
export type PostType = {
    id: string
    title: string
    likesCount: number
}
export type FriendType = {
    id: string
    firstName: string
    lastName: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostType[]
    friends: FriendType[]
    userProfile: UserResponseType | null
}
export type ProfileActions =
    | AddPost
    | SetUserProfile
export type AddPost = ReturnType<typeof addPost>
export type SetUserProfile = ReturnType<typeof setUserProfile>

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
        {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
        {id: v1(), title: ' consectetur adipisicing elit.', likesCount: 14},
        {id: v1(), title: 'Adipisci cupiditate deserunt', likesCount: 2},
        {id: v1(), title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
        {id: v1(), title: '  reiciendis repellendus sed temporibus?', likesCount: 8},
    ] as PostType[],
    friends: [
        {id: v1(), firstName: 'Kristina', lastName: 'Ovsyannikova', avatar: f1},
        {id: v1(), firstName: 'Anastasia', lastName: 'Sudakina', avatar: f2},
        {id: v1(), firstName: 'Roman', lastName: 'Azarov', avatar: f3},
        {id: v1(), firstName: 'Leonid', lastName: 'Gempel', avatar: f4},
        {id: v1(), firstName: 'Evgeny', lastName: 'Andreev', avatar: f5},
        {id: v1(), firstName: 'Marina', lastName: 'Bantser', avatar: f6},
        {id: v1(), firstName: 'Ekaterina', lastName: 'Feyn', avatar: f7},
        {id: v1(), firstName: 'Natasha', lastName: 'Vlasova', avatar: f8},
    ] as FriendType[],
    userProfile: null,
}

// reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActions): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: v1(),
                title: action.payload.value,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case "SET-USER-PROFILE": {
            return {...state, userProfile: action.payload.user}
        }
        default: {
            return state;
        }
    }
}


// actions
export const addPost = (value: string) => {
    return {type: 'ADD-POST', payload: {value}} as const
}
export const setUserProfile = (user: UserResponseType) => {
    return {type: 'SET-USER-PROFILE', payload: {user}} as const
}

// thunks