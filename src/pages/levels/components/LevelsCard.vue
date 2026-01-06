<script setup lang="ts">
import { Props } from "./types.ts";
import { computed } from "vue";

const props = defineProps<Props>();
const cssClasses = computed(() => {
    return {
        "levels-card": true,
        "levels-card_disabled": props.disabled,
    };
});
</script>
<template>
    <router-link
        :to="{
            name: 'GamePage',
            params: { difficultiesId: props.id, levelId: props.id },
        }"
        :tabindex="props.disabled ? '-1' : '0'"
        :class="cssClasses"
    >
        <h3 class="levels-card__title">{{ props.name }}</h3>
    </router-link>
</template>
<style lang="scss">
.levels-card {
    &_disabled {
        opacity: 0.6;
        pointer-events: none;
    }

    &:not(&_disabled):hover,
    &:not(&_disabled):focus,
    &:not(&_disabled):active {
        outline: none;
    }
}
</style>
