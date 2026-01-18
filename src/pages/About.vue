<template>
  <main
    class="page about-intro"
    :class="{ embedded }"
  >
    <div class="about-inner">
        <!-- 1️⃣ 타이틀 -->
      <div class="about-header">
        <p class="about-lead1">잃어버린 일상,</p>
        <p class="about-lead2">
          법률사무소 <span class="brand">위안</span>이 되찾아 드립니다.
        </p>
      </div>

      <!-- 3️⃣ 본문 -->
      <div class="about-text">
        
        <p class="about-subtext">
          법적 분쟁은 예고 없이 찾아와 평온했던 일상을 뒤흔듭니다.
          복잡한 법리와 낯선 용어, 그리고 결과에 대한 불안감까지.
          혼자 감당하기에는 너무나 무거운 짐입니다.
        </p>

        <p class="about-subtext">
          법률사무소 위안은 의뢰인의 답답한 마음을 듣는 것에서부터 시작합니다.
          어려운 법률 용어 대신 쉬운 언어로 소통하고,
          차가운 절차가 아닌 따뜻한 조력을 약속드립니다.
        </p>

        <p class="about-subtext">
          의뢰인이 다시금 편안한 일상으로 돌아갈 수 있도록
          치밀하게 싸우고 확실하게 해결하겠습니다.
        </p>
      </div>

      <!-- 2️⃣ 이미지 -->
      <div class="about-image">
        <img :src="`${$base}images/about_2.png`" alt="법률사무소 위안 소개 이미지" />
      </div>

    </div>
  </main>
</template>

<script setup>
defineProps({
  embedded: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* 소개 영역 */
.about-intro {
  padding: 120px 50px 80px;
}

/* ✅ PC: Grid 고정 */
.about-inner {
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.2fr 1fr;   /* 좌(텍스트) / 우(이미지) */
  grid-template-rows: auto 1fr;
  column-gap: 60px;
  align-items: start;
}

/* 타이틀 (좌상단) */
.about-header {
  grid-column: 1;
  grid-row: 1;
}

/* 본문 (좌하단) */
.about-text {
  grid-column: 1;
  grid-row: 2;
}

/* 이미지 (우측 전체 2줄 관통) */
.about-image {
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
}

/* 타이틀 */
.about-lead1,
.about-lead2 {
  font-family: 'Pretendard';
  margin: 0;
  color: #424242;
  font-weight: 700;
  font-size: 36px;
}

.about-lead2 .brand{
  color: #164E78;
  font-weight: 800;
  font-size: 38px;
}
.about-lead2 {
  margin-top: 12px;
  margin-bottom: 24px;
}

/* 본문 */
.about-subtext {
  font-family: 'Pretendard';
  font-size: 19px;
  line-height: 1.8;
  margin: 10px 0;
  font-weight: 500;

  position: relative;
  padding-left: 14px;
}

.about-subtext::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.4em;
  width: 3px;
  height: 1em;
  background-color: #164E78;
}

/* ✅ 모바일: 세로 스택 (flex) */
@media (max-width: 768px) {
  .about-intro {
    padding: 50px 20px;
  }

  .about-inner {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  /* ✅ 순서 제어 */
  .about-header {
    order: 1;   /* 타이틀 */
  }

  .about-image {
    order: 2;   /* 사진 */
  }

  .about-text {
    order: 3;   /* 본문 */
  }

  .about-image img {
    width: 100%;
    max-width: none;
    height: auto;
    display: block;
  }

  .about-lead1,
  .about-lead2 {
    font-size: 23px;
  }
  
  .about-lead2 .brand{
    color: #164E78;
    font-weight: 800;
    font-size: 25px;
  }
  /* 본문 */
.about-subtext {
  font-family: 'Pretendard';
  font-size: 22px;
  line-height: 1.7;
  margin: 15px 0;
  font-weight: 500;

  position: relative;
  padding-left: 14px;
}
}
</style>