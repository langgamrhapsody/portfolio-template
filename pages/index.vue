<template>
    <div class="w-full grid place-items-center h-full relative z-50">
        <div
            class="text-[#909090] text-center flex flex-col gap-2 px-0 sm:px-6 md:px-12 lg:px-6 xl:px-24 justify-center items-center">
            <h1 class=" text-4xl md:text-5xl pb-3 xs:pb-0">Hello! <br class="xs:hidden" /> I'm <span
                    class="font-bold font-raleway underline italic pt-2 sm:pt-0 text-black">Todhy</span>
            </h1>
            <span ref="typewriteRef"
                class=" typewrite relative text-4xl md:text-5xl w-max min-h-[44px] hidden xs:inline-block ">
                <span class="hidden xs:inline-block pr-3">a</span>
                <span class="wrap animate-typewrite font-bold text-black"></span>
                <span
                    class="type-ef absolute right-[-10px] top-[5px] bottom-[5px] w-[5px] bg-black text-inherit  text-black"></span>
            </span>
            <!-- <span class="xs:hidden font-bold text-4xl text-black">Musician <br />&<br /> Music Producer</span> -->
            <div class="flex gap-4 justify-center items-center py-5">
                <MusicalNoteIcon
                    class="w-6 h-6 hover:text-black hover:scale-110 hover:rotate-[30deg] transition-all ease-in-out" />
                <Icon name="jam:disc-f"
                    class="w-7 h-7 rotate-[30deg] hover:text-black hover:scale-110 hover:rotate-[70deg] transition-all ease-in-out" />
                <SVGAlbum class="w-7 h-7 hover:text-black hover:scale-110 transition-all ease-in-out" />
            </div>
            <p class="sm:px-2 md:px-12 pb-5">Welcome to the creative realm of a musician and music producer based in Bali,
                where
                traditional melodies harmonize with contemporary beats, inviting you on a unique and enchanting musical
                journey</p>

            <NuxtLink to="/contact"
                class="py-3 px-6 border border-black font-medium bg-transparent hover:bg-black text-black hover:text-white transition-all ease-in duration-300 cursor-pointer">
                Reach Out
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MusicalNoteIcon } from '@heroicons/vue/24/solid';

definePageMeta({
    pageTransition: {
        name: 'index'
    }
})

// data
const typewriteRef = ref<HTMLElement | null>(null);

// lifecycle
watch(typewriteRef, async (el) => {
    if (el) {
        new (TxtType as any)(el as HTMLElement);
    }
});

// typewriting function
const TxtType = function (element: HTMLElement) {
    let textArray = ["Musician.", "Music Producer."];
    let el = element;
    let loopNum = 0;
    let period = 1500;
    let txt = "";
    let isDeleting = false;
    tick(textArray, el, loopNum, period, txt, isDeleting);
};
function tick(
    textArray: string[],
    el: any,
    loopNum: number,
    period: number,
    txt: string,
    isDeleting: boolean
) {
    el.querySelector(".type-ef").style.animation = null;
    let i = loopNum % textArray.length;
    let fullTxt = textArray[i];

    if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
    } else {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    el.querySelector(".wrap").innerHTML = txt;

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
        delta /= 2;
    }

    if (!isDeleting && txt === fullTxt) {
        el.querySelector(".type-ef").style.animation = "typewrite infinite 1s";
        delta = period;
        isDeleting = true;
    } else if (isDeleting && txt === "") {
        el.querySelector(".type-ef").style.animation = "typewrite infinite 1s";
        isDeleting = false;
        loopNum++;
        delta = 1000;
    }

    setTimeout(function () {
        tick(textArray, el, loopNum, period, txt, isDeleting);
    }, delta);
}




</script>

<style scoped></style>