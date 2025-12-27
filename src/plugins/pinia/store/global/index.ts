import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("globalStore", () => {
    const isLoading = ref(true);
    function setIsLoading(value: boolean) {
        isLoading.value = value;
    }

    return { isLoading, setIsLoading };
});
