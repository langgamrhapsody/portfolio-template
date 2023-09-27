<template>
    <div>
        <PageLabel>Portfolio</PageLabel>
        <FancyBox :options=options>
            <a data-fancybox="gallery" data-src="https://lipsum.app/id/1/1600x1200" data-caption="Hello world">
                <img src="https://lipsum.app/id/1/200x150" width="200" height="150" alt="" />
            </a>
            <a data-fancybox="gallery" data-src="https://lipsum.app/id/1/1600x1200" data-caption="Hello world">
                <img src="https://lipsum.app/id/1/200x150" width="200" height="150" alt="" />
            </a>
        </FancyBox>

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

const options = {
    Toolbar: {
        display: {
            left: [],
            middle: ['infobar'],
            right: ['download', 'thumbs', 'close'],
        },
    },
}
</script>

<style scoped></style>