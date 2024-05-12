import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "@/types";

export const useUserStore = defineStore("user-store", () => {

    // initials
    const user = ref<User>({
        id: 0,
        name: "Wendy",
        avatar: "/images/image-5.png"
    })

    // getters
    const getUser = computed<User>(() => user.value)

    return {
        getUser
    }
})