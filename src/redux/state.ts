import f1 from '../assets/images/friend1.jpg'
import f2 from '../assets/images/friend2.jpg'
import f3 from '../assets/images/friend3.jpg'
import f4 from '../assets/images/friend4.jpg'
import f5 from '../assets/images/friend5.jpg'
import f6 from '../assets/images/friend6.jpg'
import f7 from '../assets/images/friend7.jpg'
import f8 from '../assets/images/friend8.jpg'

export type ChatType = {
    id: number
    authorName: string
    lastMessage: string
    date: string
}

export type PostType = {
    id: number
    title: string
    likesCount: number
}

export type FriendType = {
    id: number
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
            {id: 0, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: 1, title: 'Lorem ipsum dolor sit amet,', likesCount: 0},
            {id: 2, title: ' consectetur adipisicing elit.', likesCount: 14},
            {id: 3, title: 'Adipisci cupiditate deserunt', likesCount: 2},
            {id: 4, title: 'explicabo iure laboriosam nam nostrum', likesCount: 10},
            {id: 5, title: '  reiciendis repellendus sed temporibus?', likesCount: 8},
        ],
        friends: [
            {id: 1, firstName: 'Kristina', lastName: 'Ovsyannikova', avatar: f1},
            {id: 1, firstName: 'Anastasia', lastName: 'Sudakina', avatar: f2},
            {id: 1, firstName: 'Roman', lastName: 'Azarov', avatar: f3},
            {id: 1, firstName: 'Leonid', lastName: 'Gempel', avatar: f4},
            {id: 1, firstName: 'Evgeny', lastName: 'Andreev', avatar: f5},
            {id: 1, firstName: 'Marina', lastName: 'Bantser', avatar: f6},
            {id: 1, firstName: 'Ekaterina', lastName: 'Feyn', avatar: f7},
            {id: 1, firstName: 'Natasha', lastName: 'Vlasova', avatar: f8},
        ]
    },
    messengerPage: {
        chats: [
            {
                id: 1,
                authorName: 'Darya Akmaykina',
                lastMessage: 'How are you?',
                date: '25 Mar 2023'
            },
            {
                id: 2,
                authorName: 'Nikita Akmaykin',
                lastMessage: 'I am a developer!',
                date: '18 Sep 2023'
            },
            {
                id: 3,
                authorName: 'Alexey Akmaykin',
                lastMessage: 'I go to home',
                date: '31 Dec 2023'
            },
        ],
    },
}