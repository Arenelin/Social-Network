import {combineReducers, createStore} from 'redux';
import {ProfileActions, profileReducer} from './profileReducer';
import {ChatsActions, chatsReducer} from './chatsReducer';
import {MessagesActions, messagesReducer} from './messagesReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>

export type AllActionsType = MessagesActions | ChatsActions | ProfileActions