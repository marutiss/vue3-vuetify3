<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data: () => ({
      drawer: true,
      group: null,
      items: [
        {
          title: '홈',
          to: '/',
          icon:'mdi-home'
        },
        {
          title: '접근 제어',
          to: '/ip',
          icon:'mdi-ip'
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<template>
  <v-app>
    <v-app-bar
        color="primary"
        prominent
        elevation = 0
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Ncurion IDS</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
    <!-- <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  
    <v-navigation-drawer
        v-model="drawer"
      >
        <v-list density="compact" nav>
          <v-list-item v-for="(item, i) in items" :title="item.title" :key="i" :to="item.to">
            <template v-slot:prepend> 
              <v-icon :icon="item.icon"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <RouterView />

      </v-main>
  </v-app>
</template>

<style scoped>

</style>
