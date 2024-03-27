import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
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
    }
}