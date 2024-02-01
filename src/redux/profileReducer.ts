import {AppRootAction, PostType, ProfilePageType} from './store';
import {v1} from 'uuid';

export const profileReducer = (state: ProfilePageType, action: AppRootAction): ProfilePageType => {
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