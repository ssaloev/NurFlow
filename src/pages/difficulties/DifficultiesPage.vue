<script setup lang="ts">
import jsonData from "@data/difficulties/difficulties.json";
import { Difficulties } from "@data/difficulties/types.ts";
import BaseLayout from "@/components/ui/layout/BaseLayout.vue";
import DifficultyCard from "./components/DifficultyCard.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const data = jsonData as Difficulties;
</script>
<template>
    <BaseLayout :title="t('difficulties.title')">
        <div class="difficulties-page">
            <ul class="difficulties-page__list">
                <li
                    v-for="item in data.difficulties"
                    :key="item.name"
                    class="difficulties-page__item"
                    :style="`--color: ${item.color}`"
                >
                    <DifficultyCard
                        :id="item.id"
                        :name="item.name"
                        :color="item.color"
                        :gridSize="item.gridSize"
                        :disabled="item.name !== 'Learn'"
                    />
                </li>
            </ul>
        </div>
    </BaseLayout>
</template>
<style lang="scss">
.difficulties-page {
    &__list {
        gap: 20px;
        display: flex;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item {
        display: flex;
        width: 100%;
        height: auto;
        aspect-ratio: 2/1;
        justify-content: center;
        align-items: center;
    }
}
</style>
