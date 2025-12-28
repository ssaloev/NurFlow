<script setup lang="ts">
import { type Props, LOGO_SIZE } from "./types.ts";
import { computed } from "vue";
import { BRAN_NAME } from "@/const";
const env = import.meta.env.VITE_BRAND_NAME;

const props = withDefaults(defineProps<Props>(), {
    size: LOGO_SIZE.DEFAULT,
});

const parentClass = computed(() => {
    return {
        "base-logo": true,
        [`base-logo--size-${props.size}`]: true,
    };
});
</script>

<template>
    <div :class="parentClass">
        <p class="base-logo__text">{{ BRAN_NAME }}</p>
    </div>
</template>
<style lang="scss">
.base-logo {
    --bg-color: var(--p-primary-color);

    &--size-default {
        --font-size: 40px;
    }

    &__text {
        font-size: var(--font-size);
        padding: 0;
        color: var(--p-primary-color);
        text-shadow: 1px 1px 2px var(--p-primary-color);
    }
}
</style>
