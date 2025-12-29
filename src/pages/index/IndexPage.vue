<script setup lang="ts">
import BaseLogo from "@/components/ui/logo/BaseLogo.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function goToTypes() {
    router.push({
        path: "/difficulties",
    });
}

function goToAbout() {
    router.push({
        path: "/about",
    });
}
</script>
<template>
    <div class="index-page">
        <header class="index-page__header">
            <BaseLogo />
        </header>
        <main class="index-page__content">
            <Button class="index-page__play" @click="goToTypes">Play</Button>
        </main>
        <footer class="index-page__about">
            <Button
                class="index-page__about"
                severity="secondary"
                @click="goToAbout"
                >About</Button
            >
        </footer>
    </div>
</template>
<style lang="scss">
.index-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    max-width: 600px;
    padding: 0 40px;
    margin: auto;
    gap: 20px;

    &__header {
        display: flex;
        justify-content: center;
    }

    &__play,
    &__about {
        width: 100%;
    }
}
</style>
