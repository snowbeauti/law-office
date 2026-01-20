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

        <!-- 🔥 업무분야 -->
        <div class="nav-item has-sub">
          <RouterLink to="/practice" class="nav-link">
            업무분야
            <span class="arrow">▾</span>
          </RouterLink>

          <ul class="sub-menu">
            <li v-for="item in practiceList" :key="item">
              <RouterLink
                :to="`/practice/${item}`"
                class="sub-link"
              >
                {{ item }}
              </RouterLink>
            </li>
          </ul>
        </div>


        <RouterLink to="/cases">성공사례</RouterLink>
        <RouterLink to="/contact">상담문의</RouterLink>
        <RouterLink to="/location">오시는길</RouterLink>
      </nav>

      <!-- 모바일 햄버거 -->
      <button class="hamburger" @click="openMenu">
        <img :src="hamburgerSrc" alt="메뉴" />
      </button>
    </div>
  </header>

  <!-- 모바일 메뉴 -->
  <div v-if="isMenuOpen" class="mobile-menu">
    <div class="mobile-menu-header">
      <img :src="`${$base}images/logo_blue.png`" alt="법률사무소 위안" />
      <button class="close" @click="closeMenu">✕</button>
    </div>

    <nav class="mobile-nav">
      <RouterLink @click="closeMenu" to="/about">위안소개</RouterLink>
      <RouterLink @click="closeMenu" to="/members">구성원</RouterLink>

      <!-- 🔥 모바일 업무분야 -->
      <div class="mobile-sub">
        <button @click="togglePractice">
          업무분야
          <span :class="{ open: openPractice }">▾</span>
        </button>

        <div v-show="openPractice" class="mobile-sub-list">
          <RouterLink
            v-for="item in practiceList"
            :key="item"
            @click="closeMenu"
            :to="`/practice/${item}`"
          >
            {{ item }}
          </RouterLink>
        </div>
      </div>

      <RouterLink @click="closeMenu" to="/cases">성공사례</RouterLink>
      <RouterLink @click="closeMenu" to="/contact">상담문의</RouterLink>
      <RouterLink @click="closeMenu" to="/location">오시는길</RouterLink>
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
const hamburgerSrc = computed(() =>
  scrolled.value
    ? `${import.meta.env.BASE_URL}icons/list.svg`        // 🔥 블랙
    : `${import.meta.env.BASE_URL}icons/list_white.svg`  // 🔥 화이트
)
const openPractice = ref(false)

const practiceList = [
  '민사',
  '형사',
  '회생·파산',
  '가사',
  '기업법무',
  '건설·부동산',
  '인사·노무',
  '행정',
]

const isPc = computed(() => window.innerWidth >= 1024)

const togglePractice = () => {
  openPractice.value = !openPractice.value
}
</script>

<style scoped>
/* ===============================
   Navigation Dropdown (업무분야)
================================ */

/* 기준점 */
.nav-item.has-sub {
  position: relative;
}

/* 드롭다운 메뉴 */
.sub-menu {
  position: absolute;
  top: 100%;          /* 🔥 부모 바로 아래 */
  left: 50%;

  transform: translate(-50%, -10px); /* 🔥 닫힘: 위에 대기 */

  min-width: 180px;
  margin: 0;
  padding: 12px 0;

  list-style: none;
  background: rgba(15, 27, 76, 0.95);
  backdrop-filter: blur(6px);

  opacity: 0;
  visibility: hidden;

  transition:
    opacity 0.2s ease,
    transform 0.25s ease;

  z-index: 2000;
}

/* 열림 상태 */
.sub-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0); /* 🔥 위 → 아래 */
}

/* 기본: 닫힘 */
.nav-item.has-sub .sub-menu {
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -10px);
}

/* 🔥 hover 시 열림 */
.nav-item.has-sub:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}

/* 드롭다운 링크 */
.sub-link {
  display: block;
  padding: 10px 0px;
  color: #ffffff;
  white-space: nowrap;
}

.sub-link:hover {
  background: rgba(255,255,255,0.08);
}

/* 화살표 */
.arrow {
  margin-left: 4px;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

/* ================================
   드롭다운 내부는 항상 흰색
================================ */
.sub-menu,
.sub-menu .sub-link {
  color: #ffffff;
}

.header.is-scrolled .sub-menu,
.header.is-scrolled .sub-menu .sub-link {
  color: #ffffff;   /* 스크롤 상태여도 유지 */
}



</style>