
<template>
  <!-- 사례 존재 여부로만 판단 -->
  <section v-if="caseData" class="case-detail">

    <!-- ===== 본문 ===== -->
    <section class="case-body">
      <h1 class="case-title">
        {{ caseData.title }}
      </h1>

      <div class="case-section">
        <h3>사건 개요</h3>
        <p v-html="formatText(caseData.overview)"></p>
      </div>

      <div class="case-section">
        <h3>업무 수행</h3>
        <p v-html="formatText(caseData.work)"></p>
      </div>

      <div class="case-section">
        <h3>결과</h3>
        <p v-html="formatText(caseData.result)"></p>
      </div>
    </section>

    <!-- ===== 판결문 이미지 ===== -->
    <section
      v-if="judgmentImages.length"
      class="judgment-images"
    >
      <!-- 1장 -->
      <div
        v-if="judgmentImages.length === 1"
        class="single-image"
      >
        <img
          :src="judgmentImages[0]"
          :alt="caseData.title"
          @error="onImageError"
        />
      </div>

      <!-- 2장 -->
      <div
        v-else-if="judgmentImages.length === 2"
        class="double-images"
      >
        <img
          v-for="(img, index) in judgmentImages"
          :key="index"
          :src="img"
          :alt="`${caseData.title} 판결문 ${index + 1}`"
          @error="onImageError"
        />
      </div>

      <!-- 3장 이상 -->
      <div v-else class="multi-images">
        <img
          v-for="(img, index) in judgmentImages"
          :key="index"
          :src="img"
          :alt="`${caseData.title} 판결문 ${index + 1}`"
          @error="onImageError"
        />
      </div>
    </section>
  </section>
  <!-- 사례 자체가 없을 때 -->
  <p v-else class="not-found">
    해당 성공사례를 찾을 수 없습니다.
  </p>
</template>



<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { cases } from '../data/cases'

const route = useRoute()

const caseData = computed(() =>
  cases.find(c => c.id === Number(route.params.id))
)

/* 이미지 목록 생성 */
const judgmentImages = computed(() => {
  if (!caseData.value?.imageCnt) return []

  const basePath = `${import.meta.env.BASE_URL}images/cases/${caseData.value.id}/`
  const images = []

  for (let i = 1; i <= caseData.value.imageCnt; i++) {
    images.push(`${basePath}${i}.jpg`) // 기본 jpg
  }

  return images
})

/* jpg → png fallback */
function onImageError(e) {
  const img = e.target
  if (img.dataset.failed) {
    img.remove()
    return
  }
  img.dataset.failed = 'true'
  img.src = img.src.replace('.jpg', '.png')
}

/* 줄바꿈 처리 */
function formatText(text) {
  return text.trim().replace(/\n/g, '<br />')
}
</script>



<style scoped>
    /* ===============================
   Judgment Images
================================ */

/* ===============================
   Judgment Images
================================ */

.judgment-images {
  margin: 130px 0 100px;
}

/* 1장 */
.single-image {
  display: flex;
  justify-content: center;
}

.single-image img {
  max-width: 720px;
  width: 100%;
  border: 1px solid #424242;
}

/* 2장 */
.double-images {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.double-images img {
  max-width: 440px;
  width: 100%;
  border: 1px solid #424242;
}

/* 3장 이상 */
.multi-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 66px;
  max-width: 1200px;
  margin: 0 auto;
}

.multi-images img {
  width: 100%;
  border: 1px solid #424242;
}


/* ===== 본문 ===== */
.case-detail {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 140px;
  padding: 0 24px; /* 모바일 안전 */
}

.case-body {
  margin-top: 120px;
}

.case-title {
  font-family: 'Pretendard';
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 60px;
  line-height: 1.4;
}

/* 섹션 */
.case-section {
  margin-bottom: 60px;
}

.case-section h3 {
  font-family: 'Pretendard';
  position: relative;
  padding-left: 14px;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 12px;
}

/* 좌측 포인트 바 */
.case-section h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 4px;
  height: 18px;
  background-color: #0b2a6f;
}
.case-section p {
  font-family: 'Pretendard';
  font-size: 19px;
  line-height: 1.6;
  color: #424242;
}

/* 없을 때 */
.not-found {
  text-align: center;
  margin: 120px 0;
  color: #777;
}

/* 모바일 */
@media (max-width: 768px) {
  .case-body{
    margin-top: 90px;
  }
  .case-title{
    font-size: 22px;
    margin-bottom: 30px;
  }
  .case-section{
    margin-bottom: 50px;
  }

  .case-section h3{
    font-size: 20px;
  }
  
  .case-section p{
    font-size: 18px;
      
  }
  .judgment-images{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .case-detail {
    margin: 0 auto 50px;
  }
  
  /* ===== 판결문 이미지 모바일 통합 ===== */

  .single-image,
  .double-images,
  .multi-images {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 100%;
    margin: 0 auto;
  }

  .single-image img,
  .double-images img,
  .multi-images img {
    width: 100%;
    max-width: 100%;
    border: 1px solid #424242;
  }

}
</style>
