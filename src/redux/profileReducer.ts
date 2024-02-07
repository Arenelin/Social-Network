import {PostType, ProfilePageType} from './store';
import {v1} from 'uuid';
import f1 from '../assets/images/friend1.jpg';
import f2 from '../assets/images/friend2.jpg';
import f3 from '../assets/images/friend3.jpg';
import f4 from '../assets/images/friend4.jpg';
import f5 from '../assets/images/friend5.jpg';
import f6 from '../assets/images/friend6.jpg';
import f7 from '../assets/images/friend7.jpg';
import f8 from '../assets/images/friend8.jpg';

const initialState: ProfilePageType = {
    posts: {
        addedPosts: [
            {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: v1(), title: ' consectetur adipisicing elit.', likesCount: 14},
            {id: v1(), title: 'Adipisci cupiditate deserunt', likesCount: 2},
            {id: v1(), title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
            {id: v1(), title: '  reiciendis repellendus sed temporibus?', likesCount: 8},
        ],
        currentPostMessage: ''
    },
    friends: [
        {id: v1(), firstName: 'Kristina', lastName: 'Ovsyannikova', avatar: f1},
        {id: v1(), firstName: 'Anastasia', lastName: 'Sudakina', avatar: f2},
        {id: v1(), firstName: 'Roman', lastName: 'Azarov', avatar: f3},
        {id: v1(), firstName: 'Leonid', lastName: 'Gempel', avatar: f4},
        {id: v1(), firstName: 'Evgeny', lastName: 'Andreev', avatar: f5},
        {id: v1(), firstName: 'Marina', lastName: 'Bantser', avatar: f6},
        {id: v1(), firstName: 'Ekaterina', lastName: 'Feyn', avatar: f7},
        {id: v1(), firstName: 'Natasha', lastName: 'Vlasova', avatar: f8},
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActions): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const stateCopy = {...state}
            const newPost: PostType = {
                id: v1(),
                title: stateCopy.posts.currentPostMessage,
                likesCount: 0
            }
            stateCopy.posts.addedPosts =
                [...stateCopy.posts.addedPosts, newPost]
            stateCopy.posts.currentPostMessage = '';
            return stateCopy;
        }
        case 'CHANGE-POST-MESSAGE': {
            const stateCopy = {...state}
            stateCopy.posts.currentPostMessage = action.payload.symbol;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export type ProfileActions = AddPost | ChangePostMessage

export type AddPost = ReturnType<typeof addPost>
export type ChangePostMessage = ReturnType<typeof changePostMessage>

export const addPost = () => {
    return {type: 'ADD-POST'} as const
}
export const changePostMessage = (symbol: string) => {
    return {
        type: 'CHANGE-POST-MESSAGE',
        payload: {symbol}
    } as const
}