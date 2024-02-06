import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {messengerReducer} from './messengerReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>