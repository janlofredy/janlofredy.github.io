import { defineStore } from "pinia"

export const useAppState = defineStore("appState", {
    state: () => {
        return {
            navIsOpen: false,
        }
    },
})
