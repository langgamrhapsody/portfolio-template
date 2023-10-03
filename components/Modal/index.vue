<template>
    <HeadlessTransitionRoot appear :show="isOpen" as="div">
        <HeadlessDialog as="div" @close="toggleModal" class="relative z-[101]">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <HeadlessDialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <slot />>
                        </HeadlessDialogPanel>
                    </HeadlessTransitionChild>
                </div>
            </div>
        </HeadlessDialog>
    </HeadlessTransitionRoot>
    <button type="button" @click="toggleModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Open dialog
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const isOpen = ref(true)


function toggleModal() {
    isOpen.value = !isOpen.value
}
</script>
