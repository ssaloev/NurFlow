<script setup lang="ts">
import BaseLogo from "@/components/ui/logo/BaseLogo.vue";
import { onMounted } from "vue";
import { useGlobalStore } from "@/plugins/pinia/store/global";
import { useRouter } from "vue-router";

const globalStore = useGlobalStore();
const router = useRouter();

onMounted(() => {
    // @todo remove after adding real loading
    globalStore.setIsLoading(false);
    router.push({
        name: "IndexPage",
    });
});
</script>
<template>
    <div class="loader-overlay__wrapper">
        <div class="loader-overlay">
            <BaseLogo class="loader-overlay__logo" />
            <ProgressBar
                class="loader-overlay__progress-bar"
                mode="indeterminate"
                :value="50"
            ></ProgressBar>
        </div>
    </div>
</template>
<style lang="scss">
.loader-overlay {
    max-width: 400px;
    width: 100%;
    padding: 20px;

    &__wrapper {
        position: fixed;
        inset: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
    }

    &__logo {
        width: 100%;
        margin-bottom: 20px;
    }

    &__progress-bar {
        width: 100%;
        height: 20px;
    }
}
</style>
