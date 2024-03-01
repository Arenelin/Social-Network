import axios from 'axios';


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

// api
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return axios
            .get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize} `)
    }
}