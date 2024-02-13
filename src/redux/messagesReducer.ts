import {v1} from 'uuid';
import f1 from '../assets/images/friend1.jpg';

export type MessageType = {
    id: string
    text: string
    time: string
    authorName: string
    authorAvatar: string
}

export type ChatType = {
    id: string
    authorName: string
    lastMessage: string
    date: string
}

const initialState = [
    {id: v1(), text: 'Hi', time: '10:10', authorName: 'Darya', authorAvatar: f1},
    {
        id: v1(),
        text: 'How is your IT-KAMASUTRA?',
        time: '10:14',
        authorName: 'Darya',
        authorAvatar: f1
    },
    {id: v1(), text: 'Hi', time: '10:20', authorName: 'Darya', authorAvatar: f1},
    {id: v1(), text: 'Hi', time: '10:52', authorName: 'Darya', authorAvatar: f1},
    {id: v1(), text: 'Hi', time: '11:17', authorName: 'Darya', authorAvatar: f1},
] as MessageType[]

type InitialStateType = typeof initialState

export const messagesReducer = (state: InitialStateType = initialState, action: MessagesActions): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const actualHours = new Date().getHours();
            const actualMinutes = new Date().getMinutes();
            const newMessage: MessageType = {
                id: v1(),
                text: action.payload.textMessage,
                authorAvatar: f1,
                time: `${actualHours}:${actualMinutes < 10 ? '0' + actualMinutes : actualMinutes}`,
                authorName: 'Darya'
            }
            return [...state, newMessage]
        }
        default: {
            return state;
        }
    }
}

export type MessagesActions = AddMessage

export type AddMessage = ReturnType<typeof addMessage>

export const addMessage = (textMessage: string) => {
    return {type: 'ADD-MESSAGE', payload: {textMessage}} as const
}
