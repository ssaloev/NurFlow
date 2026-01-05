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
        :to="`/difficulties/${props.id}/`"
        :style="`--color: ${props.color}`"
        :tabindex="props.disabled ? '-1' : '0'"
        :class="cssClasses"
    >
        <h3 class="difficulty-card__title">{{ props.name }}</h3>
        <span
            class="difficulty-card__border-animation difficulty-card-border-animation difficulty-card-border-animation_top"
        ></span>
        <span
            class="difficulty-card__border-animation difficulty-card-border-animation difficulty-card-border-animation_right"
        ></span>
        <span
            class="difficulty-card__border-animation difficulty-card-border-animation difficulty-card-border-animation_bottom"
        ></span>
        <span
            class="difficulty-card__border-animation difficulty-card-border-animation difficulty-card-border-animation_left"
        ></span>
    </router-link>
</template>
<style lang="scss">
.difficulty-card {
    --border-width: 1px;
    --animation-block-move-to-position: 0px;
    --animation-block-size: calc(100% + calc(1px + var(--border-width)));

    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition:
        color 0.5s ease-in-out,
        border 1.5s ease-in;
    border: var(--border-width) solid transparent;

    &_disabled {
        opacity: 0.6;
        pointer-events: none;
    }

    &:not(&_disabled):hover,
    &:not(&_disabled):focus,
    &:not(&_disabled):active {
        outline: none;
        color: var(--color);
        border-color: var(--color);

        .difficulty-card-border-animation_top {
            transform: translateX(-100%);
        }

        .difficulty-card-border-animation_right {
            transform: translateY(-100%);
        }

        .difficulty-card-border-animation_bottom {
            transform: translateX(100%);
        }

        .difficulty-card-border-animation_left {
            transform: translateY(100%);
        }
    }

    &-border-animation {
        position: absolute;
        z-index: 1;

        background-color: var(--color);
        transition: transform 0.5s ease-in-out;
    }

    &-border-animation_top {
        top: var(--animation-block-move-to-position);
        left: var(--animation-block-move-to-position);
        height: var(--border-width);
        width: var(--animation-block-size);
    }

    &-border-animation_right {
        right: var(--animation-block-move-to-position);
        top: var(--animation-block-move-to-position);
        height: var(--animation-block-size);
        width: var(--border-width);
    }

    &-border-animation_bottom {
        bottom: var(--animation-block-move-to-position);
        left: var(--animation-block-move-to-position);
        height: var(--border-width);
        width: var(--animation-block-size);
    }

    &-border-animation_left {
        left: var(--animation-block-move-to-position);
        top: var(--animation-block-move-to-position);
        height: var(--animation-block-size);
        width: var(--border-width);
    }
}
</style>
