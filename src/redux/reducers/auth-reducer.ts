import {UserDataType} from "../../api/auth-api";
import {UserResponseType} from "../../api/users-api";

// init state
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    currentUser: null
}

// types
type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    currentUser: UserResponseType | null
}
export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCurrentUser>

// reducer
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload.userData, isAuth: true}
        case "SET-CURRENT-USER-DATA":
            return {...state, currentUser: action.payload.currentUser}
        default: {
            return state;
        }
    }
}

// actions
export const setAuthUserData = (userData: UserDataType) =>
    ({type: 'SET-USER-DATA', payload: {userData}} as const)
export const setCurrentUser = (currentUser: UserResponseType) =>
    ({type: 'SET-CURRENT-USER-DATA', payload: {currentUser}} as const)
