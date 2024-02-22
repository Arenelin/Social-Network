import {combineReducers, createStore} from 'redux';
import {ProfileActions, profileReducer} from './reducers/profileReducer';
import {ChatsActions, chatsReducer} from './reducers/chatsReducer';
import {MessagesActions, messagesReducer} from './reducers/messagesReducer';
import {PossibleFriendsActions, possibleFriendsReducer} from './reducers/possibleFriendsReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    possibleFriends: possibleFriendsReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>

export type AllActionsType = MessagesActions | ChatsActions | ProfileActions | PossibleFriendsActions