export type ChatData = {
    id: number
    authorName: string
    lastMessage: string,
    date:string
}
export const chatsData: ChatData[] = [
    {
        id: 1,
        authorName: 'Darya Akmaykina',
        lastMessage: 'How are you?',
        date:'25 Mar 2023'
    },
    {
        id: 1,
        authorName: 'Nikita Akmaykin',
        lastMessage: 'I am a developer!',
        date:'18 Sep 2023'
    },
    {
        id: 1,
        authorName: 'Alexey Akmaykin',
        lastMessage: 'I go to home',
        date:'31 Dec 2023'
    },
]