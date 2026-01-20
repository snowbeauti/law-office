<script setup>
import About from '../pages/About.vue'
import Members from '../pages/Members.vue'
import Practice from '../pages/Practice.vue'
import Contact from '../pages/Contact.vue'
import Location from '../pages/Location.vue'

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { cases } from '../data/cases'

const router = useRouter()

/* 홈용 성공사례 (최대 10개) */
const homeCases = computed(() =>
  [...cases].sort((a, b) => b.id - a.id).slice(0, 10)
)

/* 반응형 기준 */
const visibleCount = ref(3)
const currentIndex = ref(0)

function updateVisibleCount() {
  visibleCount.value = window.innerWidth <= 768 ? 1 : 3

  /* 화면 전환 시 index 보정 */
  if (currentIndex.value > homeCases.value.length - visibleCount.value) {
    currentIndex.value = Math.max(
      homeCases.value.length - visibleCount.value,
      0
    )
  }
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

/* 슬라이드 이동 */
const trackStyle = computed(() => ({
  transform: `translateX(-${(100 / visibleCount.value) * currentIndex.value}%)`
}))

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

function next() {
  if (currentIndex.value < homeCases.value.length - visibleCount.value) {
    currentIndex.value++
  }
}

/* 개요 미리보기 */
function excerpt(text, length = 90) {
  return text.replace(/\n/g, '').trim().slice(0, length) + '...'
}

function goDetail(id) {
  router.push(`/cases/${id}`)
}
</script>

<template>
  <Hero />

  <!-- 소개 -->
  <section class="section-about">
    <About />
  </section>

  <!-- 구성원 -->
  <section class="home-members">
    <!-- <h2 class="home-members-title">구성원</h2> -->
    <Members />
  </section>

  <!-- 업무분야 -->
  <section class="home-practice">
    <h2 class="home-practice-title">업무분야</h2>
    <Practice />
  </section>

  <!-- 성공사례 -->
  <section class="section-cases">
    <div class="section-header">
      <h2 class="title">성공사례</h2>
      <p class="desc">지금의 고민도, 곧 해결된 ‘과거’가 됩니다.</p>
    </div>

    <div class="slider-wrap">
      <!-- 이전 -->
      <button
        class="nav prev"
        @click="prev"
        :disabled="currentIndex === 0"
      >
        ‹
      </button>

      <!-- 뷰포트 -->
      <div class="slider-viewport">
        <div class="slider-mask">
          <div class="cases-track" :style="trackStyle">
            <div
              v-for="item in homeCases"
              :key="item.id"
              class="case-card"
              @click="goDetail(item.id)"
            >
              <div class="badges">
                <span
                  v-for="cat in item.categories"
                  :key="cat"
                  class="badge"
                >
                  {{ cat }}
                </span>
              </div>

              <h3 class="case-title">{{ item.title }}</h3>
              <p class="overview">{{ excerpt(item.overview) }}</p>
            </div>
          </div>
        </div>

        <!-- 다음 -->
        <button
          class="nav next"
          @click="next"
          :disabled="currentIndex >= homeCases.length - visibleCount"
        >
          ›
        </button>
      </div>
    </div>

    <div class="more">
      <button @click="$router.push('/cases')">
        VIEW MORE <span>＋</span>
      </button>
    </div>
  </section>

  <!-- 상담문의 -->
  <section class="home-consult">
    <h2 class="home-consult-title">상담문의</h2>
    <Contact />
  </section>

  <!-- 오시는길 -->
  <section class="home-location">
    <Location />
  </section>
</template>

<style scoped>

/* ===============================
   소개
================================ */
  .section-about {
  background: #f5f6f7;
  padding: 80px 50px 30px;
}

/* ===============================
   구성원
================================ */

:deep(.members-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}
/* ===============================
   업무분야
================================ */
.home-practice {
  background: #f5f6f7;
  padding: 80px 50px 30px;
}

.home-practice-title {
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}
.home-practice :deep(.practice-page) {
  padding: 0px 50px 100px;
}
.home-practice :deep(.page-practice-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}
/* ===============================
   성공사례
================================ */
.section-cases {
  padding: 100px 0 140px;
  background: #0b1e3c;
  color: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header .title {
  font-size: 36px;
  font-weight: 700;
}

.section-header .desc {
  margin-top: 30px;
  font-size: 40px;
  font-family: 'Noto Serif KR', serif;
}

/* 슬라이더 */
.slider-wrap {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.slider-viewport {
  position: relative;
  padding: 0 64px; /* 화살표 영역 */
}
/* 🔥 카드가 실제로 보이는 영역 */
.slider-mask {
  overflow: hidden;
  width: 100%;
}
.cases-track {
  display: flex;
  gap: 18.5px;
  transition: transform 0.45s ease;
}

/* 카드 (PC: 3개) */
.case-card {
  flex: 0 0 calc((100% - 50px) / 3);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 36px 32px;
  box-sizing: border-box;
  cursor: pointer;
}

.case-card:hover {
  background: rgba(255,255,255,0.05);
  border-color: #B08A5A;
}

/* 배지 */
.badge {
  padding: 6px 14px;
  margin-right: 6px;
  background: #B08A5A;
  color: #0b1e3c;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
}

/* 텍스트 */
.case-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 14px;
  margin-top: 15px;
}

.overview {
  font-size: 15px;
  line-height: 1.7;
  color: #e1e6ef;
}

/* 화살표 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 52px;
  background: none;
  border: none;
  color: #B08A5A;
  cursor: pointer;
  z-index: 3;
}

.nav:disabled {
  opacity: 0.25;
}

.nav.prev {
  left: 12px;
}

.nav.next {
  right: 12px;
}

/* 더보기 */
.more {
  margin-top: 80px;
  text-align: center;
}

.more button {
  padding: 16px 48px;
  border: 1px solid #B08A5A;
  background: none;
  color: #B08A5A;
  font-weight: 600;
}
/* ===============================
   상담문의
================================ */
.home-consult {
  padding: 120px 50px 0px;
  background: #f9f9f9;
}

.home-consult-title {
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}

.home-consult :deep(.contact-form) {
  padding: 0px 50px 100px;
}
.home-consult :deep(.contact-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}
/* ===============================
   오시는길
================================ */
.home-location {
  padding: 120px 50px;
}

.home-location-title {
  font-family: 'Pretendard';
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
}

.home-location :deep(.directions-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}

/* ===============================
   전체적용
================================ */
 :deep(.brand_color){
  font-weight: 700;
}

/* ===============================
   모바일버전
================================ */

@media (max-width: 768px) {
/* ===============================
   소개
================================ */
.section-about{
  padding: 0;
}
/* ===============================
   구성원
================================ */
.home-members {
  text-align: center;
  padding: 50px 0px;
}
.home-members .page{
  padding: 0px 20px;

}
.home-members-title{
  font-size: 28px;
}
:deep(.members-title) {
    font-size: 1.18rem;
    margin-top: 30px;
}
/* ===============================
   업무분야
================================ */
.home-practice {
  background: #f5f6f7;
  padding: 50px 20px;
}
.home-practice :deep(.practice-page) {
  padding: 0;
}
.home-practice-title{
  font-size: 28px;
}
.home-practice :deep(.page-practice-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 1.18rem;
  font-weight: 500;
}
/* ===============================
   성공사례
================================ */

  .section-cases {
    padding: 50px 20px;
  }

  .section-header{
    margin-bottom: 20px;
  }

  .section-header .title {
    font-size: 28px;
  }

  .section-header .desc {
    font-size: 1.15rem;
  }
  .slider-viewport {
    padding: 0 20px;
  }
  .case-card {
    flex: 0 0 100%;
    padding: 20 15px;
  }

  .cases-track {
    gap: 0;
  }
    /* 화살표 다시 살리기 */
  .nav {
    display: block;
    font-size: 40px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    color: #B08A5A;
  }

  .nav.prev {
    left: -5px;
  }

  .nav.next {
    right: -5px;
  }

  /* 중요: 화살표가 잘리지 않도록 */
  .slider-viewport {
    overflow: visible;
  }

  .slider-mask {
    overflow: hidden;
    width: 96%;
    margin-left: 2%;
  }
   .badges {
    display: flex;
    gap: 8px;
    margin-bottom: 2px;
  }

  .badge {
    padding: 6px 10px;
    margin-bottom: 10px;
    font-size: 12px;
  }
  
  /* 제목 */
  .case-card .case-title {
    font-size: 14px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 5px;
    line-height: 1.4;
  }
  /* 사건개요 미리보기 */
  .case-card .overview {
    font-size: 12px;
    line-height: 1.7;
    color: #b9b9b9;
    margin-bottom: 0px;
  }

  .more{
    margin-top: 40px;
  }
  .more button{
    padding: 10px 30px;
  }
/* ===============================
   상담문의
================================ */
.home-consult {
  padding: 50px 20px;
}
.home-consult :deep(.contact-form) {
  padding: 0;
}
.home-consult-title{
  font-size: 28px;
}
.home-consult :deep(.contact-title) {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 1.12rem;
  font-weight: 500;
}
/* ===============================
   오시는길
================================ */
.home-location {
  padding: 50px 20px;
}

.home-location :deep(.directions-page) {
  padding: 0;
}
.home-location :deep(.directions-title) {
    margin-top: 0px;
    font-size: 1.12rem;
    font-weight: 500;
    margin-bottom: 20px;
}
}
</style>
