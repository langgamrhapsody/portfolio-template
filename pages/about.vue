<template>
    <div class="h-full ">
        <PageLabel>About</PageLabel>
        <div class="flex flex-col xl:flex-row gap-10 py-14 text-[#909090] xl:h-full items-center mx-auto">
            <div class="w-max xl:w-6/12 flex justify-center items-center overflow-hidden ">
                <img src="@/assets/img/todhy.png" alt="todhy-photo"
                    class="w-6/12 xl:w-[90%] h-auto aspect-square hover:scale-105 transition-all ease-in-out duration-300">
            </div>
            <div class="w-full xl:w-6/12 h-auto flex justify-center items-center sm:items-start flex-col gap-4">
                <div class="hidden xs:flex gap-3 text-black transition-all ease-in-out duration-300 font-bold items-center">
                    <MapPinIcon class="w-6 h-6" />
                    <p>Denpasar, Bali, Indonesia</p>
                </div>
                <h1 class="text-4xl 2xl:text-5xl font-bold sm:text-left text-center">My Name is <span
                        class="text-black italic">Todhy</span></h1>
                <p class="italic w-full text-center sm:text-left">I'm not just an artist, I'am a storyteller, a creator of
                    sonic landscapes, and a
                    guardian
                    of Bali's rich musical heritage. With an unwavering commitment to authenticity and innovation, I
                    seamlessly weaves together the threads of tradition and modernity, producing music that resonates
                    with both the soul and the senses.</p>
                <p></p>
                <div class="flex gap-4 flex-col sm:flex-row">
                    <NuxtLink to="/portfolio"
                        class="px-6 py-2 border-2 font-bold hover:bg-[#909090] hover:text-white transition-all ease-in duration-200 text-center">
                        My Work
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="px-6 py-2 border-2 bg-[#909090] text-white hover:bg-transparent hover:text-[#909090]  transition-all ease-in duration-200 font-bold text-center">
                        Get In Touch</NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/solid';

definePageMeta({
    pageTransition: {
        name: 'page'
    }
})
</script>

<style scoped></style>