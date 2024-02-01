import {AppRootAction, MessageType, MessengerPageType} from './store';
import {v1} from 'uuid';
import f1 from '../assets/images/friend1.jpg';

export const messengerReducer = (state: MessengerPageType, action: AppRootAction): MessengerPageType => {
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