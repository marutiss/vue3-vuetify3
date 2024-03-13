import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useWorldStore = defineStore('FEtesk', {
  state: () => {
    return { username: "Vue3!" }
  },

  actions: {
    change() {
      this.username === "Vuetify3!" ? this.username = "Vue3!" : this.username = "Vuetify3!"
    }
  }
})