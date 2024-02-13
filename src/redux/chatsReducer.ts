import {v1} from 'uuid';
import {ChatType} from './messagesReducer';

export const userId_1 = v1()
export const userId_2 = v1()
export const userId_3 = v1()

const initialState: ChatType[] = [
    {
        id: userId_1,
        authorName: 'Darya Akmaykina',
        lastMessage: 'How are you?',
        date: '25 Mar 2023'
    },
    {
        id: userId_2,
        authorName: 'Nikita Akmaykin',
        lastMessage: 'I am a developer!',
        date: '18 Sep 2023',

    },
    {
        id: userId_3,
        authorName: 'Alexey Akmaykin',
        lastMessage: 'I go to home',
        date: '31 Dec 2023'
    },
]

export const chatsReducer = (state: ChatType[] = initialState, action: ChatsActions): ChatType[] => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export type ChatsActions = AddNewChat

export type AddNewChat = ReturnType<typeof addNewChat>

export const addNewChat = ()=>{
    return {type:'ADD-NEW-CHAT'} as const
}