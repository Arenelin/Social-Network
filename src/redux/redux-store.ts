import {combineReducers, createStore} from 'redux';
import {ProfileActions, profileReducer} from './reducers/profileReducer';
import {ChatsActions, chatsReducer} from './reducers/chatsReducer';
import {MessagesActions, messagesReducer} from './reducers/messagesReducer';
import {PossibleFriendsActions, possibleFriendsReducer} from './reducers/possibleFriendsReducer';
import {authReducer} from "./reducers/auth-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    possibleFriends: possibleFriendsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export type AllActionsType = MessagesActions | ChatsActions | ProfileActions | PossibleFriendsActions