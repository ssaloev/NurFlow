<script setup lang="ts">
import { Props } from "./types.ts";

const props = defineProps<Props>();
</script>

<template>
    <section class="base-section">
        <h2 class="base-section__title">{{ props.title }}</h2>
        <slot />
    </section>
</template>

<style scoped lang="scss"></style>
