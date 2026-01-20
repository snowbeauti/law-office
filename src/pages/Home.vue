<script setup>
import About from '../pages/About.vue'
import Members from '../pages/Members.vue'
import Practice from '../pages/Practice.vue'
import Contact from '../pages/Contact.vue'
import Location from '../pages/Location.vue'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { cases } from '../data/cases'

const router = useRouter()

/* Home용 최대 10개 */
const homeCases = computed(() =>
  [...cases].sort((a, b) => b.id - a.id).slice(0, 10)
)

const VISIBLE_COUNT = 3
const currentIndex = ref(0)

/* 슬라이드 이동 스타일 */
const trackStyle = computed(() => ({
  transform: `translateX(-${(100 / VISIBLE_COUNT) * currentIndex.value}%)`
}))

/* 좌우 이동 (1칸씩) */
function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}

function next() {
  if (currentIndex.value < homeCases.value.length - VISIBLE_COUNT) {
    currentIndex.value += 1
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
  <Members />

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

      <!-- 🔥 뷰포트 -->
      <div class="slider-viewport">
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
        :disabled="currentIndex >= homeCases.length - VISIBLE_COUNT"
      >
        ›
      </button>
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
  <SectionPractice />
  <SectionCases />
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
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
}

.section-header .desc {
  font-family: 'Noto Serif KR', serif;
  margin-top: 30px;
  font-size: 40px;
  font-weight: 500;
}

/* 슬라이더 */
.slider-wrap {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.slider-viewport {
  overflow: hidden;
  width: 100%;
}

.cases-track {
  display: flex;
  transition: transform 0.45s ease;
  gap: 25px;
}

/* 카드 (3개 기준) */
.case-card {
  flex: 0 0 calc(94% / 3);
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.35);
  padding: 36px 32px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.case-card:hover {
  background: rgba(255,255,255,0.05);
  border-color: #B08A5A;
}

/* 화살표 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 52px;
  color: #B08A5A;
  cursor: pointer;
  opacity: 0.85;
}

.nav:disabled {
  opacity: 0.2;
  cursor: default;
}

.nav.prev {
  left: -80px;
}

.nav.next {
  right: -80px;
}

/* 배지 */
.badges {
  margin-bottom: 18px;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 5px;
  color: #0b1e3c;
  background: #B08A5A;
  border-radius: 4px;
}

/* 텍스트 */
.case-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 14px;
}

.overview {
  font-size: 15px;
  line-height: 1.7;
  color: #e1e6ef;
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
  cursor: pointer;
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
:deep(.members-title) {
    font-size: 1.18rem;
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
/* ===============================
   상담문의
================================ */
/* ===============================
   오시는길
================================ */
}
</style>
