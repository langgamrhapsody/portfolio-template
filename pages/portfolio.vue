<template>
    <div>
        <PageLabel>Portfolio</PageLabel>
        <!-- <FancyBox :options=options>
            <a data-fancybox="gallery" data-src="https://lipsum.app/id/1/1600x1200" data-caption="Hello world">
                <img src="https://lipsum.app/id/1/200x150" width="200" height="150" alt="" />
            </a>
            <a data-fancybox="gallery" data-src="https://lipsum.app/id/1/1600x1200" data-caption="Hello world">
                <img src="https://lipsum.app/id/1/200x150" width="200" height="150" alt="" />
            </a>
        </FancyBox>

        <ClientOnly>
            <Modal />
        </ClientOnly> -->
        <div class="w-full flex flex-col gap-6 text-[#909090] py-10 ">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl md:text-5xl font-bold">My <span class="text-black">Work</span></h1>
                <p class="">Here is some of my latest creations, hope you enjoy it!</p>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div class="" v-for="work in workList" :key="work.name">
                    <div
                        class="group block relative overflow-hidden rounded-xl transition-all ease-in-out duration-300 hover:shadow-xl">
                        <div class="w-full h-full transition-all ease-in-out duration-300">
                            <img class="ratio-item property-card__img w-full h-auto group-hover:brightness-50 brightness-100 object-cover object-center transition-all  ease-in-out duration-300 grayscale group-hover:grayscale-0"
                                :src="work.img" :alt="work.name">
                        </div>
                        <div
                            class="bg-white w-full absolute bottom-[-150px] p-4 transition-all ease-in-out duration-300 group-hover:bottom-[0] flex justify-between">
                            <div class="flex flex-col gap-1 w-1/2">
                                <p class="font-bold text-base min-h-[3rem] overflow-ellipsis ">{{ work.name }}</p>
                                <p class="text-xs italic">genre</p>
                                <p class="text-sm">{{ work.date }}</p>
                            </div>
                            <div class="h-auto flex flex-col w-1/2 gap-2 items-center justify-center">
                                <a :href="work.link" target="_blank"
                                    class="w-full p-2 rounded-xl border text-sm flex  gap-2 justify-start items-center hover:text-red-500 hover:border-red-500 transition-all ease-in-out duration-300">
                                    <PlayIcon class="w-[18px] h-[18px]" /> Play on
                                    Youtube
                                </a>
                                <a :href="work.spotify" target="_blank"
                                    class="w-full p-2 rounded-xl border text-sm flex gap-2 justify-start items-center hover:text-green-500 hover:border-green-500 transition-all ease-in-out duration-300">
                                    <Icon name="mdi:spotify" class="w-[18px] h-[18px]" />
                                    Play on
                                    spotify
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <button @click="toggleModal">test modal</button> -->
            </div>
        </div>

    </div>
</template>

<script setup lang="ts" >
import { PlayIcon } from '@heroicons/vue/24/solid'
import { filename } from 'pathe/utils'
import { aku, jomblo_inguh, air_mata_terakhir_untukmu } from '@/assets/img/work/index'




definePageMeta({
    pageTransition: {
        name: 'page'
    }
})



const workList = [{
    link: 'https://youtu.be/1woy1SLnvNU?si=GEJ0c3YyZravX8QY',
    name: 'Aku',
    date: 'August 2023',
    img: aku,
    spotify: 'https://open.spotify.com/track/0jJFe1Pk7KhzU6RoEsq3MO?si=a4f678608e42417f'
},
{
    link: 'https://youtu.be/mYriDUKT3bk?si=sS8Y9RoUyrtFjiFm',
    name: 'Jomblo Inguh',
    date: 'September 2023',
    img: jomblo_inguh,
    spotify: 'https://open.spotify.com/track/0eU2ho7Y3HiOpXgpnkyLWS?si=f8cac47d62594a5a'

},
{
    link: 'https://youtu.be/MovLWUYyNzg?si=7BgZCaDF6B4k0Bx0',
    name: 'Air Mata Terakhir Untukmu',
    date: 'Oktober 2023',
    img: air_mata_terakhir_untukmu,
    spotify: 'https://open.spotify.com/track/4FxqJAiFkb9eD8Nv4qqFSx?si=b87c11c765524d24'
}
]


const options = {
    Toolbar: {
        display: {
            left: [],
            middle: ['infobar'],
            right: ['download', 'thumbs', 'close'],
        },
    },
}

const isOpen = ref(false)

function toggleModal() {
    isOpen.value = !isOpen.value
}

</script>

<style scoped></style>