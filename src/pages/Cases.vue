<script setup>
import { ref, computed } from 'vue'
import { cases, MAIN_CATEGORIES } from '../data/cases'
import { useRouter } from 'vue-router'

const router = useRouter()

/* ===== 필터 ===== */
const selected = ref('전체')

/* ===== 페이지네이션 ===== */
const currentPage = ref(1)
const PAGE_SIZE = 9

function changeCategory(cat) {
  selected.value = cat
  currentPage.value = 1
}

/* ===== 최신순 정렬 (id desc) ===== */
const sortedCases = computed(() =>
  [...cases].sort((a, b) => b.id - a.id)
)

/* ===== 필터된 리스트 ===== */
const filteredCases = computed(() => {
  const base = sortedCases.value

  if (selected.value === '전체') return base

  if (selected.value === '기타') {
    return base.filter(
      c => !c.categories.some(cat => MAIN_CATEGORIES.includes(cat))
    )
  }

  return base.filter(c =>
    c.categories.includes(selected.value)
  )
})

/* ===== 페이지 단위 슬라이스 ===== */
const pagedCases = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredCases.value.slice(start, start + PAGE_SIZE)
})

const totalPages = computed(() =>
  Math.ceil(filteredCases.value.length / PAGE_SIZE)
)

/* ===== 개요 미리보기 ===== */
function excerpt(text, length = 90) {
  return text.replace(/\n/g, '').trim().slice(0, length) + '...'
}

const goDetail = (item) => {
  router.push(`/cases/${item.id}`)
}


</script>


<template>
  <!-- 상단 문구 -->
  <h2 class="cases-title">
    지금의 고민도, 곧 해결된 ‘과거’가 됩니다.
  </h2>

  <!-- 카테고리 필터 -->
  <div class="cases-tabs">
    <button
      v-for="tab in ['전체', '민사', '형사', '가사', '기업법무', '기타']"
      :key="tab"
      :class="{ active: selected === tab }"
      @click="changeCategory(tab)"
    >
      {{ tab }}
    </button>
  </div>

  <!-- 리스트 -->
  <div class="cases-grid">
    <div
      v-for="item in pagedCases"
      :key="item.id"
      class="case-card"
      @click="goDetail(item)"
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

      <h3 class="title">{{ item.title }}</h3>

      <p class="overview">
        {{ excerpt(item.overview) }}
      </p>
    </div>
  </div>

  <!-- 페이지네이션 -->
  <div class="pagination" v-if="totalPages > 1">
    <button
      v-for="n in totalPages"
      :key="n"
      :class="{ active: currentPage === n }"
      @click="currentPage = n"
    >
      {{ n }}
    </button>
  </div>
</template>


<style scoped>
/* ===== 타이틀 ===== */
.cases-title {
  font-family: 'Pretendard';
  margin: 120px 0 50px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

/* ===== 카테고리 탭 ===== */
.cases-tabs {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-bottom: 60px;
}

.cases-tabs button {
  background: none;
  border: none;
  padding: 6px 0;
  font-size: 16px;
  font-weight: 500;
  color: #777;
  cursor: pointer;
  position: relative;
}

.cases-tabs button.active {
  color: #0b2a6f;
  font-weight: 600;
}

.cases-tabs button.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: #0b2a6f;
}

/* ===== 리스트 ===== */
.cases-grid {
  max-width: 1200px;
  margin: 0 auto 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* ===== 카드 ===== */
.case-card {
  border: 1px solid #e5e5e5;
  padding: 28px 26px 32px;
  cursor: pointer;
  transition: border-color 0.2s ease;
  background: #fff;
}

.case-card:hover {
  border-color: #0b2a6f;
}

/* 카테고리 배지 */
.badge {
  display: inline-block;
  margin-bottom: 14px;
  font-size: 13px;
  font-weight: 600;
  color: #0b2a6f;
}
/* ===== 카테고리 배지 (칩 형태) ===== */
.badges {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0b4a7f; /* 네 이미지랑 거의 동일 */
  border-radius: 6px;
  line-height: 1;
}

/* 제목 */
.case-card .title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.4;
}

/* 사건개요 미리보기 */
.case-card .overview {
  font-size: 15px;
  line-height: 1.7;
  color: #555;
}

/* ===== 페이지네이션 ===== */
.pagination {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 120px;
}

.pagination button {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
}

.pagination button.active {
  background: #0b2a6f;
  color: #fff;
  border-color: #0b2a6f;
}

/* ===== 반응형 ===== */
@media (max-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cases-tabs {
    flex-wrap: wrap;
    gap: 16px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .cases-title {
    font-size: 26px;
    margin-top: 60px;
  }
}
</style>
