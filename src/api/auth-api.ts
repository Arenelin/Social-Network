import axios from 'axios';
import {UserResponseType} from "./users-api";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

// types
export type UserDataType = {
    id: number
    email: string
    login: string
}

type ResponseMeType = {
    data: UserDataType,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}

// api
export const authApi = {
    me() {
        return instance.get<ResponseMeType>('/auth/me')
    },
    getUser(id: number) {
        return instance.get<UserResponseType>(`/profile/${id}`)
    }
}