<template>
  <Header />
  <Hero />
  <RouterView />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
</script>
