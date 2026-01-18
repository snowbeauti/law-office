<template>
  <main class="page">
    <section class="members-section">
      <h2 class="members-title">의뢰인의 이익을 최우선으로 생각합니다.</h2>

      <div class="members-grid two">
        <!-- 구성원 1 -->
        <div class="member-card">
          <div class="member-photo">
            <RouterLink to="/members/1">
              <img class="member-img" src="/law-office/images/member_1.jpg" alt="이종호 대표변호사" />
            </RouterLink>

            <img
              class="hover-logo"
              src="/law-office/images/logo_blue_v2.png"
              alt="위안 로고"
            />

            <span class="hover-text">자세히보기 →</span>
          </div>

          <p class="member-name">
            이종호
          </p>
          <p class="member-job">
            대표변호사
          </p>
        </div>

        <!-- 구성원 2 -->
        <div class="member-card">
          <div class="member-photo">
            <RouterLink to="/members/2">
              <img class="member-img" src="/law-office/images/member_2.jpg" alt="이태훈 대표변호사" />
            </RouterLink>

            <img
              class="hover-logo"
              src="/law-office/images/logo_blue_v2.png"
              alt="위안 로고"
            />

            <span class="hover-text">자세히보기 →</span>
          </div>
          
          <p class="member-name">
            이태훈
          </p>
          <p class="member-job">
            대표변호사
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.photo-link {
  display: block;
  width: 100%;
}
/* ===============================
   Members Section
================================ */

.members-section {
  padding: 40px 60px 120px;
  background: #ffffff;
  text-align: center;
}

.members-title {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #424242;
  font-family: 'Pretendard';
}

/* ===============================
   Grid
================================ */

/* 2인 전용 그리드 */
.members-grid.two {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 120px;
}

/* 카드 */
.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ===============================
   Photo + Hover
================================ */

.member-photo {
  position: relative;
  max-width: 400px;
  padding: 40px 20px 20px;
  cursor: pointer;
}
.member-img {
  width: 100%;
  height: auto;
  display: block;
}
/* 인물 사진 (❗ 절대 opacity 주지 말 것) */
.member-photo > img:first-child {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
}

/* hover 로고 */
.hover-logo {
  position: absolute;
  left: 24px;
  bottom: 24px;

  width: 200px;          /* ← 로고 크기 여기서 조절 */
  height: auto;

  opacity: 0;
  transition: opacity 0.3s ease;
}

/* hover 텍스트 */
.hover-text {
  position: absolute;
  right: 24px;
  bottom: 24px;

  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-right: 15px;
  opacity: 0;
  transform: translateX(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* hover 동작 */
.member-photo:hover .hover-logo {
  opacity: 0.5;   /* ✔ 로고만 투명 */
}

.member-photo:hover .hover-text {
  opacity: 1;
  transform: translateX(0);
}
.member-photo:hover img:first-child {
  filter:
    saturate(1.15)
    contrast(1.18)
    brightness(0.96);
}

/* ===============================
   Text
================================ */

.member-name {
  font-family: 'Pretendard';
  font-weight: 900;
  margin: 2px;

  font-size: 40px;
  color: #424242;
  letter-spacing: 0.2em;
}

.member-job {
  font-family: 'Pretendard';
  margin: 2px;

  font-size: 18px;
  font-weight: 600;
  color: #555;
}

/* ===============================
   Mobile
================================ */

/* ✅ 모바일: 세로 스택 (flex) */
@media (max-width: 768px) {
  .members-section{
    padding: 0px;

  }
  .members-title{
    margin-bottom: 0px;
  }
  .members-grid.two {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .members-title {
    font-size: 21px;
  }

  /* 모바일에서는 hover 효과 제거 */
  .hover-logo,
  .hover-text {
    display: none;
  }
  .member-photo{
    padding: 40px 0px 20px;
  }
}
</style>