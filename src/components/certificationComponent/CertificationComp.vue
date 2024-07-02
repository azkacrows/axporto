<script setup>
import { computed } from 'vue';

const props = defineProps({
    Url: String,
    FileId: String,
});

const source = computed(
    () => `https://drive.google.com/thumbnail?authuser=0&sz=w1080&id=${props.FileId}`
);
</script>

<template>
    <div class="certInner">
        <div class="w-full carousel-item">
            <img :src="source" class="object-scale-down w-full rounded-lg lg:rounded-xl" />
        </div>
    </div>
</template>

<style scoped>
.certInner {
    @apply flex p-1 lg:p-2 w-full carousel;
}
</style>
