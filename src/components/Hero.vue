<template>
  <!-- =========================
       HEADER / NAV
  ========================== -->


  <!-- =========================
       HERO
  ========================== -->

  <!-- 메인 -->
  <section v-if="isHome" class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source :src="`${base}videos/main-hero_header.mp4`" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h2 class="title-main">
        법이 당신에게 <span class="brand brand_color">위안</span>이 되는 순간
      </h2>
      <h2 class="sub title-main">
        진정한 <span class="brand brand_color">위안</span>은 완벽한 솔루션에서 시작됩니다.
      </h2>
    </div>
  </section>

  <!-- 서브 hero -->
  <section
    v-else-if="showSubHero && heroReady"
    class="sub-hero"
    :style="bgStyle"
  >
    <div class="sub-hero-overlay"></div>
    <h2 class="sub-title">{{ title }}</h2>
  </section>
</template>



<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const base = import.meta.env.BASE_URL

/* =========================
   NAV
========================= */
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

/* =========================
   HERO
========================= */
const isHome = computed(() => route.path === '/')
const showSubHero = computed(() => route.meta.showSubHero !== false)

const map = {
  '/about':    { title: '위안소개', img: `${base}images/about.png` },
  '/members':  { title: '구성원',   img: `${base}images/members.png` },
  '/practice': { title: '업무분야', img: `${base}images/practice.png` },
  '/cases':    { title: '성공사례', img: `${base}images/cases.png` },
  '/contact':  { title: '상담문의', img: `${base}images/contact.png` },
  '/location': { title: '오시는길', img: `${base}images/location.png` },
  '/PrivacyPolicy': { title: '개인정보처리방침', img: `${base}images/PrivacyPolicy.png` },
}

const conf = computed(() => {
  if (route.path.startsWith('/practice/')) {
    return {
      title: route.params.title || '',
      img: `${base}images/practice.png`,
    }
  }
  return map[route.path] || { title: '', img: '' }
})

const title = computed(() => conf.value.title)

const bgStyle = computed(() => ({
  backgroundImage: `url(${conf.value.img})`,
}))

const heroReady = ref(false)

watch(
  () => conf.value.img,
  (src) => {
    heroReady.value = false
    if (!src) return
    const img = new Image()
    img.onload = () => (heroReady.value = true)
    img.src = src
  },
  { immediate: true }
)

</script>


<style scoped>
/* 서브 hero */


.sub-hero-overlay {
  position: absolute;
  inset: 0;
  /* background: rgba(0,0,0,0.25); */
}

.sub-title {
  font-family: 'Pretendard';
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 50px;
  letter-spacing: 0.15em;
  margin: 0;
}
/* =========================
   HEADER / NAV
========================= */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1000;
  background: rgba(0,0,0,0.35);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav-list {
  display: flex;
  gap: 32px;
  align-items: center;
  height: 80px;
}

.nav-item {
  position: relative;
}

.nav-item a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.has-sub .arrow {
  margin-left: 4px;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

/* 🔥 PC hover 메뉴 */
.sub-menu {
  position: absolute;
  top: 100%;
  left: 0;

  background: #0f1b4c;
  min-width: 220px;
  padding: 12px 0;

  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: 0.2s ease;
  z-index: 2000;
}

.sub-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.sub-link {
  display: block;
  padding: 10px 20px;
  color: #fff;
}

.sub-link:hover {
  background: rgba(255,255,255,0.08);
}
.hero {
  position: relative;
  z-index: 1;
}
/* =========================
   HERO (기존 유지)
========================= */


@media (max-width: 768px) {
.sub-hero {
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 공통 헤더 높이 보정 */
  padding-top: 60px;
  box-sizing: border-box;
}

.sub-title {
  font-family: 'Pretendard';
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 30px;
  letter-spacing: 0.15em;
  margin: 0;
}
}
</style>
