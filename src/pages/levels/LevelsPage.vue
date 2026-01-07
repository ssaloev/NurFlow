<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { type Levels, type Level } from "@data/levels/types.ts";
import { useI18n } from "vue-i18n";
import BaseLayout from "@/components/ui/layout/BaseLayout.vue";
import LevelsCard from "./components/LevelsCard.vue";

const { t } = useI18n();

const route = useRoute<"LevelsPage">();
const id = route.params.id;
const data = ref<Array<Level> | null>(null);

const fetchData = async () => {
    import(`@data/levels/${id}/levels.json`)
        .then((res) => {
            const result = res as Levels;
            data.value = result.levels;
        })
        .catch((err) => {
            console.error("[ERROR FETCHING LEVELS ] ", err);
        });
};

onMounted(fetchData);
</script>

<template>
    <BaseLayout :title="t('levels.title')" v-if="data">
        <div class="levels-page">
            <ul class="levels-page__list">
                <li
                    v-for="item in data"
                    :key="item.name"
                    class="levels-page__item"
                    :style="`--color: ${item.color}`"
                >
                    <LevelsCard
                        :id="item.id"
                        :name="item.name"
                        :disabled="item.name !== 'Learn'"
                        :starAchievement="0"
                    />
                </li>
            </ul>
        </div>
    </BaseLayout>
</template>

<style lang="scss">
.levels-page {
    &__list {
        display: grid;
        grid-template: repeat(3, 1fr) / auto;
    }
}
</style>
