<template>
    <div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const props = defineProps({
    options: Object
})



onMounted(() => {
    const opts = props.options || {}

    Fancybox.bind('[data-fancybox]', opts)

    return () => {
        Fancybox.destroy()
    }
})
</script>

<style lang="scss" scoped></style>