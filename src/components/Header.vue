<template>
  <header
    class="header"
    :class="{
      'header--overlay': !scrolled,
      'is-scrolled': scrolled
    }"
  >
    <div class="header-inner">
      <!-- 로고 -->
      <h1 class="logo">
        <RouterLink to="/">
          <img :src="logoSrc" alt="법률사무소 위안" />
        </RouterLink>
      </h1>

      <!-- PC 네비 -->
      <nav class="nav">
        <RouterLink to="/about">위안소개</RouterLink>
        <RouterLink to="/members">구성원</RouterLink>
        <RouterLink to="/practice">업무분야</RouterLink>
        <RouterLink to="/cases">성공사례</RouterLink>
        <RouterLink to="/contact">상담문의</RouterLink>
        <RouterLink to="/location">오시는길</RouterLink>
      </nav>

      <!-- 모바일 햄버거 -->
      <button class="hamburger" @click="openMenu">
        <img src="/icons/list_white.svg" class="contact-icon" alt="메뉴" />
      </button>
    </div>
  </header>

  <!-- 모바일 메뉴 오버레이 -->
  <div v-if="isMenuOpen" class="mobile-menu">
    <div class="mobile-menu-header">
      <img
        :src="`${$base}images/logo_blue.png`"
        alt="법률사무소 위안"
      />
      <button class="close" @click="closeMenu">✕</button>
    </div>

    <nav class="mobile-nav">
      <RouterLink @click="closeMenu" to="./about">위안소개</RouterLink>
      <RouterLink @click="closeMenu" to="./members">구성원</RouterLink>
      <RouterLink @click="closeMenu" to="./practice">업무분야</RouterLink>
      <RouterLink @click="closeMenu" to="./cases">성공사례</RouterLink>
      <RouterLink @click="closeMenu" to="./contact">상담문의</RouterLink>
      <RouterLink @click="closeMenu" to="./location">오시는길</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/* 스크롤 상태 */
const scrolled = ref(false)

/* 모바일 메뉴 */
const isMenuOpen = ref(false)

const openMenu = () => {
  isMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

/* 스크롤 처리 */
const updateScroll = () => {
  if (route.meta.forceScrolled) {
    scrolled.value = true
    return
  }
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll)
})

watch(
  () => route.path,
  () => {
    updateScroll()
    closeMenu()
  },
  { immediate: true }
)

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

/* 로고 */
const logoSrc = computed(() =>
  scrolled.value
    ? `${import.meta.env.BASE_URL}images/logo_blue.png`
    : `${import.meta.env.BASE_URL}images/logo_white.png`
)
</script>
