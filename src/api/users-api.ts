import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

// types
export type UserDomainType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string, large: string }
    status: string
    uniqueUrlName: string
}

type ResponseType = {
    items: UserDomainType[]
    totalCount: number
    error: null
}

type UserContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type UserPhotosType = {
    small: string
    large: string
}

export type UserResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: UserContactsType
    photos: UserPhotosType
}

// api
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
    },
    getCurrentUser(id: number) {
        return instance.get<UserResponseType>(`/profile/${id}`)
    }
}