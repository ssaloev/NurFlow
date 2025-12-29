<script setup lang="ts">
import jsonData from "@data/difficulties/difficulties.json";
import { Difficulties } from "@data/difficulties/types.ts";
const data = jsonData as Difficulties;
console.log(data);
</script>
<template>
    <div class="difficulties-page"></div>
</template>
<style lang="scss">
.difficulties-page {
    display: flex;
}
</style>
