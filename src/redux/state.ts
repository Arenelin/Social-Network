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

export type ProfilePageType = {
    posts: PostType[]
    friends: FriendType[]
}

export type RootStateType = {
    messengerPage: MessengerPageType
    profilePage: ProfilePageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: v1(), title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: v1(), title: ' consectetur adipisicing elit.', likesCount: 14},
            {id: v1(), title: 'Adipisci cupiditate deserunt', likesCount: 2},
            {id: v1(), title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
            {id: v1(), title: '  reiciendis repellendus sed temporibus?', likesCount: 8},
        ],
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {id: v1(), title: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost); //Пока только муттабельно, ввиду того, что нет стейта
    console.log(state);
}