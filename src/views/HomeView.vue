
<template>
  <div>
    <h1>호옴호옴호옴</h1>
  </div>
  <p>Hello {{ username }}</p>
    <button @click="changeMessage">Change</button>
</template>

<script setup>
import { useWorldStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'
const store = useWorldStore()
const { username } = storeToRefs(store) //

function changeMessage() {
  store.change()
};
</script>