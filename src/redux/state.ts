import {v1} from 'uuid'
import f1 from '../assets/images/friend1.jpg'
import f2 from '../assets/images/friend2.jpg'
import f3 from '../assets/images/friend3.jpg'
import f4 from '../assets/images/friend4.jpg'
import f5 from '../assets/images/friend5.jpg'
import f6 from '../assets/images/friend6.jpg'
import f7 from '../assets/images/friend7.jpg'
import f8 from '../assets/images/friend8.jpg'

export type ChatType = {
    id: string
    authorName: string
    lastMessage: string
    date: string
}

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

export type MessengerPageType = {
    chats: ChatType[]
}

export type PostsType = {
    addedPosts: PostType[]
    currentPostMessage: string
}

export type ProfilePageType = {
    posts: PostsType
    friends: FriendType[]
}

export type RootStateType = {
    messengerPage: MessengerPageType
    profilePage: ProfilePageType
}

export const store = {
    _state: {
        profilePage: {
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
        },
        messengerPage: {
            chats: [
                {
                    id: v1(),
                    authorName: 'Darya Akmaykina',
                    lastMessage: 'How are you?',
                    date: '25 Mar 2023'
                },
                {
                    id: v1(),
                    authorName: 'Nikita Akmaykin',
                    lastMessage: 'I am a developer!',
                    date: '18 Sep 2023'
                },
                {
                    id: v1(),
                    authorName: 'Alexey Akmaykin',
                    lastMessage: 'I go to home',
                    date: '31 Dec 2023'
                },
            ],
        },
    },
    _callSubscriber(state: RootStateType) {
    },

    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: AppRootAction) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost: PostType = {
                    id: v1(),
                    title: this._state.profilePage.posts.currentPostMessage,
                    likesCount: 0
                }
                this._state.profilePage.posts.addedPosts.push(newPost)
                this._state.profilePage.posts.currentPostMessage = '';
                this._callSubscriber(this._state)
                break
            }
            case 'CHANGE-POST-MESSAGE': {
                this._state.profilePage.posts.currentPostMessage = action.payload.symbol;
                this._callSubscriber(this._state)
                break
            }
            default:
                return this._state
        }
    }
}

export type AppRootAction = AddPost | ChangePostMessage

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