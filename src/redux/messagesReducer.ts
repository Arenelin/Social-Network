import {MessagesType, MessageType} from './store';
import {v1} from 'uuid';
import f1 from '../assets/images/friend1.jpg';
import {userId_1, userId_2, userId_3} from './chatsReducer';

export type MessagesObjType = {
    [key: string]: MessagesType
}

const initialState: MessagesObjType = {
    [userId_1]: {
        addedMessages: [
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
        ],
    },
    [userId_2]: {
        addedMessages: [
            {id: v1(), text: 'Hi', time: '10:10', authorName: 'Nikita', authorAvatar: f1},
            {id: v1(), text: 'Buy', time: '11:17', authorName: 'Nikita', authorAvatar: f1},
        ],
    },
    [userId_3]: {
        addedMessages: [
            {id: v1(), text: 'Hi', time: '10:10', authorName: 'Alexey', authorAvatar: f1},
            {
                id: v1(),
                text: 'How is your IT-KAMASUTRA?',
                time: '10:14',
                authorName: 'Alexey',
                authorAvatar: f1
            },
            {id: v1(), text: 'Hello', time: '10:20', authorName: 'Alexey', authorAvatar: f1},
        ],
    },
}

export const messagesReducer = (state: MessagesObjType = initialState, action: MessagesActions): MessagesObjType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const actualHours = new Date().getHours();
            const actualMinutes = new Date().getMinutes();
            const newMessage: MessageType = {
                id: v1(),
                text: action.payload.textMessage,
                authorAvatar: f1,
                time: `${actualHours}:${actualMinutes < 10 ? '0' + actualMinutes : actualMinutes}`,
                authorName: action.payload.nameAuthorOfMessage
            }
            return {
                ...state,
                [action.payload.userId]: {
                    ...state[action.payload.userId],
                    addedMessages: [...state[action.payload.userId].addedMessages, newMessage]
                }
            }
        }
        default: {
            return state;
        }
    }
}

export type MessagesActions = AddMessage

export type AddMessage = ReturnType<typeof addMessage>

export const addMessage = (userId: string, nameAuthorOfMessage: string, textMessage: string) => {
    return {type: 'ADD-MESSAGE', payload: {userId, nameAuthorOfMessage, textMessage}} as const
}
