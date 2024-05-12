<template>
    <!-- welcome -->
    <section class="p-10 rounded-3xl border border-gray-200 text-center relative mb-3">
        <!-- copywriting -->
        <section class="mb-10 px-3">
            <h1 class="text-3xl font-semibold text-secondary mb-3">Have a Good day, <br> {{ getUser.name }} &#128075;
            </h1>
            <p class="text-gray-400">
                Fuel your days with the boundless enthuasiasm of a belong explorer.
            </p>
        </section>

        <!-- tools -->
        <section class="flex items-center justify-between gap-1 mb-3">
            <!-- field -->
            <div class="w-11/12 border border-gray-200 rounded-full flex justify-between overflow-hidden ps-4">
                <input placeholder="I want to" class="bg-white outline-none py-2 rounded-full w-10/12" type="text">

                <!-- options -->
                <div class="bg-gray-50 flex gap-3 items-center px-3 text-gray-500">
                    <button><i class="fa-regular fa-calendar"></i></button>
                    <button><i class="fa-regular fa-star"></i></button>
                </div>
            </div>

            <!-- action -->
            <button class="w-10 h-10 grid place-items-center bg-primary text-white rounded-full">
                <i class="fa-regular fa-paper-plane -translate-x-.5"></i>
            </button>
        </section>

        <!-- categories -->
        <section class="flex gap-1 justify-between">
            <template v-for="(item, index) in categories" :key="index">
                <button class="flex items-center text-gray-500 rounded-full text-xs px-4 py-2 bg-gray-100">
                    <i class="fa-regular me-1" :class="item.icon"></i>
                    {{ item.name }}
                </button>
            </template>
        </section>

        <!-- illustration -->
        <img class="absolute left-0 w-14 bottom-2/4 translate-y-2/4" src="/images/image-2.png" alt="Images">
        <img class="absolute right-0 w-14 top-12 translate-y-2/4" src="/images/image-3.png" alt="Images">
    </section>

    <!-- chats -->
    <section class="rounded-3xl overflow-hidden border border-gray-200 grid grid-cols-12">
        <!-- users -->
        <section class="col-span-6 border-e border-gray-200">
            <template v-for="(user, index) in getUsers" :key="index">
                <!-- wrapper -->
                <div @click="selectedUser = user"
                    class="p-3 border-b border-gray-100 hover:bg-tersier-200 cursor-pointer duration-200"
                    :class="{ 'bg-tersier-200': user.id === selectedUser.id }">
                    <!-- inner wrapper -->
                    <div class="px-1 flex justify-between">
                        <!-- user -->
                        <div class="flex items-center gap-2">
                            <!-- avatar -->
                            <div class="w-10 h-10 rounded-full overflow-hidden">
                                <img :src="`/images${user.avatar}`" alt="">
                            </div>

                            <div>
                                <p class="text-sm text-secondary font-medium">{{ user.name }}</p>
                                <div class="text-gray-400 text-xs">
                                    <i :class="user.isOnline ? 'text-green-400' : 'text-red-400'"
                                        class="fa-solid fa-circle text-[.5rem] -translate-y-[.4px]"></i>
                                    {{ user.isOnline ? "online" : user.lastOnlineAt }}
                                </div>
                            </div>
                        </div>

                        <!-- additional -->
                        <div class="flex flex-col gap-1 items-center">
                            <small class="text-gray-400">{{ user.lastConversation.time }}</small>
                            <div v-if="user.lastConversation.chats.filter(chat => chat.senderId !== getUser.id).length > 0"
                                class="bg-primary h-4 w-4 rounded-full grid place-items-center text-xs text-gray-100">
                                {{ user.lastConversation.chats.filter(chat => chat.senderId !== getUser.id).length }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </section>

        <!-- conversation -->
        <section class="col-span-6 p-1">
            <!-- wrapper -->
            <div class="p-3 rounded-3xl bg-tersier-200 min-h-full max-h-full overflow-auto relative">
                <!-- chat -->
                <div class="flex flex-col gap-2">
                    <template v-for="(chat, index) in selectedUser.lastConversation.chats" :key="index">
                        <!-- my ballon -->
                        <div v-if="chat.senderId === getUser.id" class="w-full flex justify-end items-end gap-2">
                            <small class="text-gray-500 text-xs">{{ chat.timestamp }}</small>
                            <!-- content -->
                            <div class="px-3 py-2 text-xs bg-tersier-300 rounded-s-xl rounded-br-xl rounded-tr-md">
                                {{ chat.content }}
                            </div>
                        </div>

                        <!-- other side -->
                        <div v-else class="w-full flex items-end gap-2">
                            <!-- content -->
                            <div class="px-3 py-2 text-xs bg-tersier-100 rounded-e-xl rounded-bl-xl rounded-tl-md">
                                {{ chat.content }}
                            </div>
                            <small class="text-gray-500 text-xs">{{ chat.timestamp }}</small>
                        </div>
                    </template>
                </div>

                <!-- action -->
                <div class="absolute bottom-0 left-0 right-0 flex gap-3 p-2">
                    <input v-model="message" type="text" class="bg-white rounded-full w-9/12 text-sm outline-none ps-4"
                        placeholder="Enter text..." />

                    <!-- send -->
                    <button @click="[setNewChat(selectedUser.id, message), message = '']"
                        class="w-10 h-10 grid place-items-center bg-primary text-white rounded-full">
                        <i class="fa-regular fa-paper-plane text-sm -translate-x-.5"></i>
                    </button>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import type { Category, UserChat } from '@/types';
import { useChatStore } from '@/stores/chat.store';
import { useUserStore } from '@/stores/user.store';

// initials
const { getUsers, setNewChat } = useChatStore()
const { getUser } = useUserStore()
const message = ref<string>("")
const selectedUser = ref<UserChat>(getUsers[0])

const categories: Category[] = [
    { name: "Now", icon: "fa-bell" },
    { name: "Tomorrow", icon: "fa-clock" },
    { name: "Next Week", icon: "fa-clock" },
    { name: "Custom", icon: "fa-calendar" },
]


</script>