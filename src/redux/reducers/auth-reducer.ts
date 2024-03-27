import {UserDataType} from "../../api/auth-api";

// init state
const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}

// types
type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean
}
export type AuthActionsType = SetUserData

export type SetUserData = ReturnType<typeof setUserData>

// reducer
export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload.userData}
        default: {
            return state;
        }
    }
}

// actions
export const setUserData = (userData: UserDataType) =>
    ({type: 'SET-USER-DATA', payload: {userData}} as const)
