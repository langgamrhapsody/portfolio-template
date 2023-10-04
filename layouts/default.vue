<template>
    <div class="flex max-h-screen overflow-hidden  relative">
        <div :class="isNavOpen ? 'left-0' : 'left-[-100%] xs:left-[-83.333333%] sm:left-[-66.666667%] lg:left-0'"
            class="absolute z-[100] top-0 left-0 lg:relative w-full xs:w-10/12 sm:w-8/12 lg:w-[600px] h-screen shadow-2xl transition-all ease-in-out duration-[700ms]">
            <div class="relative w-full h-full  bg-white lg:border-r border-[#e6e6e699]">
                <div class=" w-full h-full flex flex-col justify-center items-center gap-5">

                    <div class="w-full flex flex-col justify-center items-center">
                        <p class="font-raleway font-bold text-5xl underline italic">
                            Todhy<span class="font-medium">98</span>
                        </p>
                        <!-- <p class="font-raleway font-medium text-2xl  italic pl-5">
                            App
                        </p> -->
                    </div>
                    <div class="flex flex-col gap-2 justify-center items-center capitalize py-4 font-montserrat">
                        <NuxtLink @click="toggleNav" v-for="links in navLinks" :key="links.link" :to="links.link"
                            class="cursor-pointer hover:tracking-widest hover:font-bold transition-all ease-in-out">
                            {{ links.name }}
                        </NuxtLink>
                    </div>
                    <div class="flex gap-4 items-center justify-center">
                        <a target="_blank" href="https://www.facebook.com/Todhy98"
                            class="hover:scale-110 transition-all ease-in-out">
                            <Icon name="ic:outline-facebook" class="w-8 h-8" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/70dhy98/"
                            class="hover:scale-110 transition-all ease-in-out">
                            <Icon name="ri:instagram-fill" class="w-8 h-8" />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/@70dhy98"
                            class="hover:scale-110 transition-all ease-in-out">
                            <Icon name="mdi:youtube" class="w-8 h-8" />
                        </a>
                        <a target="_blank"
                            href="https://open.spotify.com/artist/7j4bOR3QBncDsjuFs3EEcU?si=kGf0yGpxRBOvF8Dcfe2XRg"
                            class="hover:scale-110 transition-all ease-in-out">
                            <Icon name="mdi:spotify" class="w-8 h-8" />
                        </a>
                        <a target="_blank" href="https://www.tiktok.com/@todhy98"
                            class="hover:scale-110 transition-all ease-in-out">
                            <Icon name="ic:baseline-tiktok" class="w-8 h-8" />
                        </a>
                    </div>
                    <div class="italic font-light text-sm text-center py-4">
                        <p>
                            Todhy App @ 2023 <br /> by <span class="font-normal">ADC Media</span>
                        </p>
                    </div>
                    <div class="py-10">
                        <button type="button" @click="toggleNav"
                            class="xs:hidden rounded-full w-10 h-10 border p-2 border-black flex justify-center items-center">
                            <ChevronDoubleLeftIcon class="w-full h-full text-black" />
                        </button>
                    </div>
                </div>
                <button @click="toggleNav"
                    class="rounded-button absolute top-1/2 -translate-y-1/2 right-[-42px] w-[42px] h-[10%] bg-white flex flex-col justify-center items-center p-3 lg:hidden text-[#909090] hover:text-black transition-all ease-in duration-300">
                    <ChevronDoubleRightIcon class="w-6 h-6" />
                </button>
            </div>
        </div>
        <div @click="isNavOpen = false" :class="isNavOpen ? 'visible opacity-100' : 'invisible opacity-0 '"
            class='w-full h-full overflow-hidden lg:hidden absolute bg-black  transition-all ease-in-out duration-500 z-[98] bg-opacity-60'>
        </div>
        <div class="w-full min-h-screen overflow-hidden overflow-y-scroll p-8 bg-[#f8f8f8] relative z-10">
            <div class="w-full h-full pt-8 xs:p-8 lg:px-12 font-montserrat">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BeakerIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/24/solid'

const isNavOpen = ref(false)

function toggleNav() {
    isNavOpen.value = !isNavOpen.value
}

watch(isNavOpen, () => {
    if (isNavOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.removeAttribute('style')
    }
})

const navLinks = [{
    link: '/',
    name: 'home',
},
{
    link: '/about',
    name: 'about',
},
{
    link: '/portfolio',
    name: 'portfolio',
},
{
    link: '/contact',
    name: 'contact',
}]
</script>

<style scoped>
.rounded-1 {
    border-radius: 0 0 0 10px;
}

.rounded-2 {
    border-radius: 0 15px 15px 0;
}

.rounded-3 {
    border-radius: 10px 0 0 0;
}</style>