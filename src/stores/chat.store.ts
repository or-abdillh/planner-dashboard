import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { UserChat } from "@/types";
import { useUserStore } from "./user.store";

export const useChatStore = defineStore("chat-store", () => {

    // initials
    const { getUser } = useUserStore()
    const users = ref<UserChat[]>([
        {
            id: 1,
            name: "Jane Cooper",
            avatar: "/image-6.png",
            isOnline: true,
            lastConversation: {
                chats: [
                    { content: "Morning", senderId: 1, timestamp: "12:00" },
                    { content: "Lets join us wendy!", senderId: 1, timestamp: "12:00" },
                    { content: "Sure Jane!", senderId: 0, timestamp: "12:00" },
                ],
                time: "15:00"
            }
        },
        {
            id: 2,
            name: "Jenny Wilson",
            avatar: "/image-7.png",
            isOnline: true,
            lastConversation: {
                chats: [],
                time: "13:45"
            }
        },
        {
            id: 3,
            name: "Broklyn Simon",
            avatar: "/image-8.png",
            lastOnlineAt: "10 minutes ago",
            isOnline: false,
            lastConversation: {
                chats: [
                    { content: "Morning", senderId: 4, timestamp: "12:00" },
                ],
                time: "10:20"
            }
        },
        {
            id: 4,
            name: "Theresa Angel",
            avatar: "/image-9.png",
            lastOnlineAt: "30 minutes ago",
            isOnline: false,
            lastConversation: {
                chats: [
                    { content: "How are u?", senderId: 4, timestamp: "12:00" },
                    { content: "P", senderId: 4, timestamp: "12:00" },
                    { content: "Lets join us wendy!", senderId: 4, timestamp: "12:00" },
                ],
                time: "09:30"
            }
        },
        {
            id: 5,
            name: "Kim Minji",
            avatar: "/image-10.png",
            lastOnlineAt: "8 minutes ago",
            isOnline: false,
            lastConversation: {
                chats: [],
                time: "Monday"
            }
        },
        {
            id: 6,
            name: "Brian Tracy",
            avatar: "/image-11.png",
            lastOnlineAt: "20 minutes ago",
            isOnline: false,
            lastConversation: {
                chats: [],
                time: "Sunday"
            }
        }
    ])

    // getters
    const getUsers = computed<UserChat[]>(() => users.value)

    // actions
    const setNewChat = (receiverId: number, content: string): void => {

        // find
        const receiver = users.value.find(user => user.id === receiverId)

        if (receiver) {
            users.value[
                users.value.indexOf(receiver)
            ].lastConversation.chats.push({
                senderId: getUser.id,
                content,
                timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`
            })
        }
    }

    return {
        getUsers,
        setNewChat
    }
})