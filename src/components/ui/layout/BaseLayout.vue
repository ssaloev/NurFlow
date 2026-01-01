<script setup lang="ts">
import { Props } from "./types.ts";
import BaseHeader from "../header/BaseHeader.vue";
import BaseSection from "../section/BaseSection.vue";

const props = defineProps<Props>();
</script>

<template>
    <div class="base-layout">
        <BaseHeader class="base-layout__header" />
        <main class="base-layout__main">
            <BaseSection :title="props.title">
                <slot />
            </BaseSection>
        </main>
    </div>
</template>

<style lang="scss">
.base-layout {
    padding: 40px;
    text-align: center;
    &__header {
        margin-bottom: 80px;
    }
}
</style>
