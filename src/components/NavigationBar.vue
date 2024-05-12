<style scoped>
.pill--rounded {
    @apply px-8 py-3 rounded-full bg-white flex items-center;
}
</style>

<template>
    <nav class="sticky top-0 z-20">
        <!-- wrapper -->
        <main class="flex justify-between px-8 py-4">
            <!-- brand -->
            <section class="pill--rounded gap-2 animate__slideInLeft animate__animated">
                <!-- logo -->
                <img src="/images/fitplan.png" alt="Fitplan" class="w-[1rem]">
                <p class="font-medium text-secondary text-lg">fitplan</p>
            </section>

            <!-- menus -->
            <section class="pill--rounded gap-10 animate__slideInDown animate__animated">
                <template v-for="(menu, index) in menus" :key="index">
                    <!-- menu -->
                    <button @click="active = menu" class="duration-200"
                        :class="active.name === menu.name ? 'text-primary' : 'text-gray-400'">
                        <i class="fa-solid me-1" :class="menu.icon"></i>
                        {{ menu.name }}
                    </button>
                </template>
            </section>

            <!-- others -->
            <section
                class="rounded-full bg-white flex items-center py-3 px-4 gap-3 animate__slideInDown animate__animated">
                <!-- field: search -->
                <div class="rounded-full bg-gray-100 text-gray-700 ps-4">
                    <i class="fa-solid fa-search me-3 py-3"></i>
                    <input class="bg-gray-100 rounded-e-full outline-none" type="text" placeholder="Search here..." />
                </div>

                <!-- notification -->
                <div class="w-10 h-10 grid place-items-center rounded-full bg-tersier-200">
                    <i class="fa-regular fa-bell text-gray-600"></i>
                </div>

                <!-- user -->
                <div :class="`bg-[url('${getUser.avatar}')]`"
                    class="w-8 h-8 grid place-items-center rounded-full bg-center bg-cover">
                </div>
            </section>
        </main>
    </nav>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/user.store';
import { ref } from 'vue';

type Menu = {
    name: string,
    icon: string
}

// initials
const { getUser } = useUserStore()
const menus: Menu[] = [
    { name: "Home", icon: "fa-home" },
    { name: "Calendar", icon: "fa-calendar" },
    { name: "Activity", icon: "fa-chart-line" },
    { name: "Messages", icon: "fa-comments" },
    { name: "Settings", icon: "fa-gear" },
]

const active = ref<Menu>(menus[0])

</script>