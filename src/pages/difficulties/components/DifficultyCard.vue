<script setup lang="ts">
import { Props } from "./types.ts";
import { computed } from "vue";

const props = defineProps<Props>();
const cssClasses = computed(() => {
    return {
        "difficulty-card": true,
        "difficulty-card_disabled": props.disabled,
    };
});
</script>
<template>
    <router-link
        :to="`/difficulties/${props.id}`"
        :style="`--color: ${props.color}`"
        :class="cssClasses"
    >
        <h3 class="difficulty-card__title">{{ props.name }}</h3>
    </router-link>
</template>
<style lang="scss">
.difficulty-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--color);

    &_disabled {
        opacity: 0.6;
        pointer-events: none;
    }
}
</style>
