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
                            <div class="flex flex-col gap-1">
                                <p class="font-bold">{{ work.name }}</p>
                                <p class="text-xs italic">genre</p>
                                <p class="text-sm">{{ work.date }}</p>
                            </div>
                            <div class="h-auto flex items-end">
                                <a :href="work.link" target="_blank"
                                    class=" p-2 rounded-xl border text-sm flex gap-1 justify-center items-center hover:text-red-500 hover:border-red-500 transition-all ease-in-out duration-300">
                                    <PlayIcon class="w-[14px] h-[14px]" /> Play on
                                    Youtube
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

<script setup >
import { PlayIcon } from '@heroicons/vue/24/solid'
import { filename } from 'pathe/utils'
import aku from "@/assets/img/work/aku.png";
import jomblo_inguh from "@/assets/img/work/jomblo_inguh.png";



definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

const glob = import.meta.glob('@/assets/img/work/*.png', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const workList = [{
    link: 'https://youtu.be/1woy1SLnvNU?si=GEJ0c3YyZravX8QY',
    name: 'Aku',
    date: 'August 2023',
    img: aku
},
{
    link: 'https://youtu.be/mYriDUKT3bk?si=sS8Y9RoUyrtFjiFm',
    name: 'Jomblo Inguh',
    date: 'September 2023',
    img: jomblo_inguh

},
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