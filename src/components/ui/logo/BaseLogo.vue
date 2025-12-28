<script setup lang="ts">
import { type Props, LOGO_SIZE } from "./types.ts";
import { computed } from "vue";
import { BRAN_NAME } from "@/const";
import LogoImage from "@/assets/images/logo.svg";

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
        <img :src="LogoImage" :alt="BRAN_NAME" class="base-logo__image" />
    </div>
</template>
<style lang="scss">
.base-logo {
    &--size-default {
        --width: 150px;
    }

    &__image {
        margin: 0;
        max-width: var(--width);
        width: 100%;
    }
}
</style>
