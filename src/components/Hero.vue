<template>
  <!-- 메인 -->
  <section v-if="isHome" class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source :src="`${base}videos/main-hero.mp4`" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h2 class="title-main">
        법이 당신에게 <span class="brand">위안</span>이 되는 순간
      </h2>
      <h2 class="sub title-main">
        진정한 위안은 완벽한 솔루션에서 시작됩니다.
      </h2>
    </div>
  </section>

  <!-- 서브 hero (🔥 이미지 로딩 완료 후에만 등장) -->
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

/* 홈 여부 */
const isHome = computed(() => route.path === '/')

/* sub-hero 표시 여부 */
const showSubHero = computed(() => route.meta.showSubHero !== false)

/* 고정 매핑 */
const map = {
  '/about':    { title: '위안소개', img: `${base}images/about.png` },
  '/members':  { title: '구성원',   img: `${base}images/members.png` },
  '/practice': { title: '업무분야', img: `${base}images/practice.png` },
  '/cases':    { title: '성공사례', img: `${base}images/cases.png` },
  '/contact':  { title: '상담문의', img: `${base}images/contact.png` },
  '/location': { title: '오시는길', img: `${base}images/location.png` },
}

/* 🔥 페이지별 설정 */
const conf = computed(() => {
  if (route.path.startsWith('/practice/')) {
    return {
      title: route.params.title || '',
      img: `${base}images/practice.png`,
    }
  }

  return map[route.path] || {
    title: '',
    img: `${base}images/about.png`,
  }
})

const title = computed(() => conf.value.title)

/* 🔥 배경 스타일 */
const bgStyle = computed(() => ({
  backgroundImage: `url(${conf.value.img})`,
}))

/* 🔥 이미지 로딩 제어 */
const heroReady = ref(false)

watch(
  () => conf.value.img,
  (src) => {
    heroReady.value = false
    if (!src) return

    const img = new Image()
    img.onload = () => {
      heroReady.value = true
    }
    img.src = src
  },
  { immediate: true }
)
</script>


<style scoped>
/* 서브 hero */
.sub-hero {
  position: relative;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  /* 공통 헤더 높이 보정 */
  padding-top: 80px;
  box-sizing: border-box;
}

.sub-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.25);
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
