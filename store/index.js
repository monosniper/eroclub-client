import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
	bg: 2,
    }),
    actions: {
	setBg(name) {
	    this.bg = name
	}
    },
})