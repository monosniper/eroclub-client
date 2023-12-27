import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        bg: 2,
        location: null
    }),
    actions: {
        setBg(name) {
            this.bg = name
        },
        setLocation(value) {
            this.location = value
        }
    },
})