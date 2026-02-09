<template>
  <Header />

  <!-- 🔥 meta 기준으로 Hero 제어 -->
  <Hero v-if="showHero" />

  <!-- ✅ 여기 -->
  <RouterView :key="route.fullPath" />
  
  <Footer />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const showHero = computed(() => {
  return route.meta.showSubHero !== false
})
</script>
