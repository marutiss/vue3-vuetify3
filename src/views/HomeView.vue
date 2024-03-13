
<template>
  <v-container fluid>
    <!-- <v-card variant="flat"> -->
      <v-row align="center" dense>
        <v-col cols=auto>
        Hello {{ username }}
        </v-col>
        <v-col>
          <v-btn rounded="xl" color="primary" @click="changeMessage">Change</v-btn>
        </v-col>
      </v-row>
    <!-- </v-card> -->
  </v-container>
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