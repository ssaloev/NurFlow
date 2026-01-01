<script setup lang="ts">
import jsonData from "@data/difficulties/difficulties.json";
import { Difficulties } from "@data/difficulties/types.ts";
import BaseLayout from "@/components/ui/layout/BaseLayout.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const data = jsonData as Difficulties;
console.log(data);
</script>
<template>
    <BaseLayout :title="t('difficulties.title')">
        <div class="difficulties-page"></div>
    </BaseLayout>
</template>
<style lang="scss">
.difficulties-page {
    display: flex;
}
</style>
