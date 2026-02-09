<template>
  <main class="page practice-page">
    <h2 class="page-practice-title reveal">
      <span class="break-mobile">복잡한 법률 문제,</span>
      위안이 <span class="brand_color">명쾌한 해답</span>을 드립니다.
    </h2>
    <div class="practice-grid reveal">
      <div
        v-for="item in items"
        :key="item.title"
        class="practice-card"
        :style="{ '--bg-image': `url(${item.image})` }"
        @click="goDetail(item.title)"
      >

        <span class="practice-title">{{ item.title }}</span>
        <span class="arrow">↗</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('is-visible')
    })
  })
})
const base = import.meta.env.BASE_URL

const router = useRouter()
const items = [
  { title: '민사', image: `${base}images/practice/civil.png` },
  { title: '형사', image: `${base}images/practice/criminal.png` },
  { title: '회생·파산', image: `${base}images/practice/bankruptcy.png` },
  { title: '가사', image: `${base}images/practice/family.png` },
  { title: '기업법무', image: `${base}images/practice/corporate.png` },
  { title: '건설·부동산', image: `${base}images/practice/realestate.png` },
  { title: '인사·노무', image: `${base}images/practice/labor.png` },
  { title: '행정', image: `${base}images/practice/admin.png` },
]
const goDetail = (title) => {
  router.push(`/practice/${title}`)
}
</script>


<style scoped>
.practice-page {
  padding: 120px 50px 100px;
  text-align: center;
}

.page-practice-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 90px;
  color: #424242;
  font-family: 'Pretendard';
}

.practice-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* 카드 */
.practice-card {
  position: relative;
  height: 260px;
  background: #f2f2ef;
  padding: 28px;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  transition: all 0.35s ease;
}

/* hover 이미지 */
.practice-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}


/* 어두운 오버레이 */
.practice-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.practice-card:hover::before,
.practice-card:hover::after {
  opacity: 1;
}

/* 텍스트 */
.practice-title {
  font-family: 'Pretendard';
  position: relative;
  z-index: 2;
  font-size: 35px;
  font-weight: 600;
  color: #004572;
  transition: color 0.3s ease;
}

.arrow {
  font-family: 'Pretendard';
  position: absolute;
  top: 18px;        /* 🔥 여기 숫자로 미세조정 */
  right: 24px;
  z-index: 2;
  font-size: 50px;
  font-weight: 500;
  color: #004572;
}

/* hover 텍스트 색 */
.practice-card:hover .practice-title, .practice-card:hover .arrow{
  color: #ffffff;
}

.practice-page .practice-card::before {
  opacity: 0.2;
}
.practice-page .practice-card::after {
  opacity: 0.15;
}
.practice-page .practice-card:hover::before,
.practice-page .practice-card:hover::after {
  opacity: 0.8;
}

/* 기본 상태 */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.page-practice-title.reveal {
  transition-delay: 0.3s;
}

.practice-grid.reveal {
  transition-delay: 0.6s;
}
/* =========================
   Mobile
========================= */
@media (max-width: 999px) {
  
  .practice-page {
    padding: 50px 20px;
  }

  .practice-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .practice-card {
    height: 180px;
    padding: 20px 10px;
  }

  /* 모바일 hover 비활성 */

  .practice-page .practice-card::before {
    opacity: 0.8;
  }

  /* 어두운 오버레이 */
  .practice-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .arrow{
    color: #ffffff;
    top: 17px;        /* 🔥 여기 숫자로 미세조정 */
    right: 14px;
    z-index: 2;
    font-size: 30px;
    font-weight: 500;
  }
  .practice-title {
    font-size: 21px;
    color: #ffffff;
  }

  .page-practice-title {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  
  .break-mobile {
    display: block;
    margin-bottom: 6px; /* 줄 간격 미세조정 */
  }
}

</style>