<template>
    <!-- hero -->
    <section
        class="p-10 rounded-3xl border border-gray-200 h-96 bg-[url('/images/image-12.png')] bg-cover bg-center relative mb-6">

        <!-- top -->
        <div class="absolute top-3 right-3 flex gap-3">
            <!-- users -->
            <div class="bg-white rounded-full flex items-center">
                <img class="w-8 h-8 rounded-full" src="/images/image-8.png" alt="user">
                <img class="w-8 h-8 rounded-full -translate-x-3" src="/images/image-9.png" alt="user">
                <img class="w-8 h-8 rounded-full -translate-x-6" src="/images/image-10.png" alt="user">

                <small class="font-medium text-secondary -translate-x-4">+2</small>
            </div>

            <!-- bell -->
            <button class="w-10 h-10 bg-white grid place-items-center rounded-full">
                <i class="fa-regular fa-bell text-secondary"></i>
            </button>
        </div>

        <!-- travelling -->
        <div class="absolute bottom-3 left-3 bg-white p-4 rounded-3xl">
            <div class="mb-3">
                <p class="font-semibold text-secondary mb-1 text-xl">Traveling to Switzerland</p>
                <!-- timelines -->
                <div class="text-sm text-gray-500 flex items-center gap-3">
                    <div class="flex gap-1 items-center">
                        <i class="fa-regular fa-calendar"></i>
                        11 Nov - 16 Nov
                    </div>
                    <div class="flex gap-1 items-center">
                        <i class="fa-regular fa-clock"></i>
                        11:00 AM
                    </div>
                </div>
            </div>

            <div class="relative">
                <!-- map -->
                <img src="/images/map.png" alt="map" class="w-64 rounded-xl">

                <!-- expand -->
                <button
                    class="absolute -right-1 -top-1 bg-secondary text-white rounded-full w-10 h-10 border-4 border-white">
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- schedule -->
    <section>
        <header class="flex justify-between mb-3">
            <p class="font-medium text-secondary text-xl">Upcoming Schedule</p>

            <!-- tools -->
            <div class="flex gap-2">
                <!-- previous month -->
                <button @click="currentMonth -= 1" :disabled="currentMonth === 0"
                    class="w-10 h-10 bg-tersier-200 rounded-full grid place-items-center">
                    <i class="fa-solid fa-chevron-left text-xs text-secondary"></i>
                </button>

                <!-- current month -->
                <span
                    class="inline-block duration-200 ease-in text-secondary font-medium text-sm px-4 bg-tersier-200 rounded-full py-2">
                    <i class="fa-regular fa-calendar me-1"></i>
                    {{ months[currentMonth] }} {{ new Date().getFullYear() }}
                </span>

                <!-- next month -->
                <button @click="currentMonth += 1" :disabled="currentMonth === months.length - 1"
                    class="w-10 h-10 bg-tersier-200 rounded-full grid place-items-center">
                    <i class="fa-solid fa-chevron-right text-xs text-secondary"></i>
                </button>

                <!-- view option -->
                <div class="bg-tersier-200 flex items-center gap-1 px-1 rounded-full">
                    <!-- calendar -->
                    <button @click="viewOption = 'calendar'" :class="{ 'bg-white': viewOption === 'calendar' }"
                        class="w-8 h-8 grid place-items-center rounded-full duration-200">
                        <i class="fa-regular fa-calendar text-xs"></i>
                    </button>

                    <!-- list -->
                    <button @click="viewOption = 'list'" :class="{ 'bg-white': viewOption === 'list' }"
                        class="w-8 h-8 grid place-items-center rounded-full duration-200">
                        <i class="fa-solid fa-list text-xs"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- table -->
        <div class="relative overflow-x-auto border border-tersier-200 rounded-3xl">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <!-- empty -->
                        <th scope="col" class="px-6 py-3"></th>
                        <th scope="col" class="px-6 py-3">
                            Sun 10
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Mon 11
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tue 12
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Wed 13
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Thu 14
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                            11 am
                        </th>
                        <td class="p-2">
                            <div class="bg-tersier-300 p-3 rounded-xl">
                                <p class="text-secondary font-semibold">
                                    Imperial <br> Dimsum
                                </p>
                                <span class="text-gray-500">
                                    <i class="fa-regular fa-calendar me-1 text-xs"></i>
                                    10 Dec
                                </span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td colspan="2" class="p-2">
                            <div class="p-2 rounded-xl bg-green-100 flex gap-3">
                                <!-- image -->
                                <img src="/images/image-12.png" alt="image 12" class="rounded-lg w-20">

                                <!-- others -->
                                <div>
                                    <p class="text-secondary font-semibold mb-1">
                                        Explore Forest Park
                                    </p>
                                    <div class="flex gap-3 text-xs mb-2">
                                        <span class="text-gray-500 flex">
                                            <i class="fa-regular fa-calendar me-1 text-xs"></i>
                                            13 Dec
                                        </span>
                                        <span class="text-gray-500 flex">
                                            <i class="fa-regular fa-clock me-1 text-xs"></i>
                                            10:00 AM
                                        </span>
                                    </div>
                                    <div class="rounded-full flex items-center">
                                        <img class="w-6 h-6 rounded-full" src="/images/image-8.png" alt="user">
                                        <img class="w-6 h-6 rounded-full -translate-x-3" src="/images/image-9.png"
                                            alt="user">
                                        <img class="w-6 h-6 rounded-full -translate-x-6" src="/images/image-10.png"
                                            alt="user">

                                        <small class="font-medium text-secondary -translate-x-4">+2</small>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                            12 am
                        </th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="p-2">
                            <div class="bg-red-100 p-3 rounded-xl">
                                <p class="text-secondary font-semibold">
                                    Mini Soccer
                                </p>
                                <span class="text-gray-500">
                                    <i class="fa-regular fa-calendar me-1 text-xs"></i>
                                    14 Dec
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';

// initials
const currentMonth = ref<number>(11)
const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"]
const viewOption = ref<"calendar" | "list">("calendar")

</script>