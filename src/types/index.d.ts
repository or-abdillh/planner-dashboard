export interface User {
    id: number,
    name: string,
    avatar: string,
}

export type Category = {
    name: string,
    icon: string
}

export interface UserChat extends User {
    isOnline: boolean,
    lastOnlineAt?: string,
    lastConversation: {
        time: string,
        chats: Chat[]
    }
}

export type Chat = {
    content: string,
    senderId: number,
    timestamp: string
}