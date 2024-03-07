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
    return { username: "world" }
  },

  actions: {
    change() {
      this.username = "Vue3"
    }
  }
})