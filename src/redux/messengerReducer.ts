import {AppRootAction, MessageType, MessengerPageType} from './store';
import {v1} from 'uuid';
import f1 from '../assets/images/friend1.jpg';

const initialState: MessengerPageType = {
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
    messages: {
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
        currentDialogMessage: ''
    }
}

export const messengerReducer = (state: MessengerPageType = initialState, action: AppRootAction): MessengerPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const stateCopy = {...state}

            const actualHours = new Date().getHours();
            const actualMinutes = new Date().getMinutes();
            const newMessage: MessageType = {
                id: v1(),
                text: stateCopy.messages.currentDialogMessage,
                authorAvatar: f1,
                time: `${actualHours}:${actualMinutes < 10 ? '0' + actualMinutes : actualMinutes}`,
                authorName: 'Darya'
            }
            stateCopy.messages.addedMessages =
                [...stateCopy.messages.addedMessages, newMessage]
            stateCopy.messages.currentDialogMessage = '';
            return stateCopy
        }
        case 'CHANGE-DIALOG-MESSAGE': {
            const stateCopy = {...state}
            stateCopy.messages.currentDialogMessage = action.payload.symbol;
            return stateCopy
        }
        default: {
            return state;
        }
    }
}

export type AddMessage = ReturnType<typeof addMessage>
export type ChangeDialogMessage = ReturnType<typeof changeDialogMessage>

export const addMessage = () => {
    return {type: 'ADD-MESSAGE'} as const
}
export const changeDialogMessage = (symbol: string) => {
    return {
        type: 'CHANGE-DIALOG-MESSAGE',
        payload: {symbol}
    } as const
}