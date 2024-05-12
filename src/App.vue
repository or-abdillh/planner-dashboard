<template>
    <NavigationBar />
    <main class="min-h-screen px-8 pb-8 grid grid-cols-7 gap-3">
        <!-- left -->
        <section class="col-span-4 bg-white p-6 rounded-3xl animate__slideInDown animate__animated">
            <LeftSection />
        </section>

        <!-- right -->
        <section class="col-span-3 bg-white p-6 rounded-3xl animate__slideInUp animate__animated">
            <RightSection />
        </section>
    </main>
</template>

<script setup lang="ts">

import NavigationBar from './components/NavigationBar.vue';
import RightSection from './components/partials/RightSection.vue';
import LeftSection from './components/partials/LeftSection.vue';

</script>