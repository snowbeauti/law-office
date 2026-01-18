<template>
  <section class="member-detail">
    <div class="member-container">

      <!-- 좌측 프로필 영역 -->
      <aside class="profile-area">
        <img
          class="profile-image"
          :src="`${$base}images/member_1.jpg`"
          alt="대표변호사 이종호"
        />

        <div class="contact-box">
            <p class="contact-item">
                <img src="/icons/phone.svg" class="contact-icon" alt="전화" />
                <span><a href="tel:0262423080">T. 02-6242-3080</a></span>
            </p>
            <p class="contact-item">
                <img src="/icons/printer.svg" class="contact-icon" alt="팩스" />
                <span>F. 02-6242-3081</span>
            </p>
            <p class="contact-item">
                <img src="/icons/email.svg" class="contact-icon" alt="이메일" />
                <span>
                    <a href="mailto:lawyerjongho@comfortlaw.co.kr">
                        E. lawyerjongho@comfortlaw.co.kr
                    </a>
                </span>
            </p>
        </div>
      </aside>

      <!-- 우측 정보 영역 -->
      <main class="info-area">
        <!-- 타이틀 -->
        <header class="member-header">
          <div class="title-wrap">
            <img
            class="logo-mark"
            :src="`${$base}images/logo_blue_v2.png`"
            alt="법률사무소 위안 로고"
            />
            <h1>
              <small>대표변호사</small>
              이종호
            </h1>
          </div>
          <div class="title-line"></div>
        </header>

        <!-- 학력 -->
        <section class="info-section">
          <h2 class="section-title">학력</h2>
          <ul class="text-list">
            <li>경북대학교 법학전문대학원 졸업</li>
            <li>연세대학교 경영학과 졸업</li>
            <li>경북고등학교 졸업</li>
          </ul>
        </section>

        <!-- 경력 -->
        <section class="info-section">
          <h2 class="section-title">경력</h2>
          <ul class="text-list">
            <li>(현) 법률사무소 위안 대표변호사</li>
            <li>법무법인 디딤돌</li>
            <li>법무법인 여기</li>
            <li>법무법인 오현</li>
            <li>대한변호사협회 등록 형사법 전문변호사</li>
            <li>대한변호사협회 등록 가사법 전문변호사</li>
          </ul>
        </section>

        <!-- 주요 업무사례 -->
        <section class="info-section">
          <h2 class="section-title">주요 수행업무</h2>

          <span class="case-tag">형사</span>
          <ul class="case-list">
            <li>[구속영장기각] 성폭력범죄의처벌등에관한특례법위반(13세미만미성년자강제추행) 사건 구속영장청구 기각 결정</li>
            <li>[구속영장기각] 서울중앙지방법원 논스톱 국선사건 피의자 구속영장기각결정 다수</li>
            <li>[성범죄] 성폭력범죄의처벌등에관한특례법위반(성적목적다중이용장소침입) 집행유예취소 청구 기각 결정</li>
            <li>[성범죄] 성폭력범죄의처벌등에관한특례법위반(성적목적다중이용장소침입) 집행유예기간 중 동종범행 3회 사건, 이례적 벌금형 도출</li>
            <li>[재산범죄] 특정경제범죄가중처벌등에관한법률위반(사기) 사건 불송치 결정</li>
            <li>[마약] 마약류관리에관한법률위반(대마) 사건 교육이수조건부 기소유예 결정</li>
            <li>[음주운전] 도로교통법위반(음주운전) 사건 벌금형 다수</li>
            <li>[교통사고] 교통사고처리특례법위반(치사) 사건 벌금형 판결(집행유예∙실형 방어)</li>
            <li>[소년사건] 성폭력범죄의처벌등에관한특례법위반(13세미만미성년자위계등추행) 등 사건 보호처분 1호(감호위탁), 4호(단기보호관찰) 결정</li>
            <li>[성범죄] 아동·청소년의성보호에관한법률위반(성착취물 제작·소지) 고소대리 사건 검찰 항고하여 재기수사명령 도출</li>
            <li>[성범죄] 강제추행 고소대리 사건 고소 전 합의 도출</li>
            <li>[재산범죄] 특정경제범죄가중처벌등에관한법률위반(사기) 피해액 40억대 고소대리 사건 수행</li>
          </ul>

          
          <span class="case-tag2">가사</span>
          <ul class="case-list">
            <li>[이혼] 인터넷 잡지 기사로 유책사유 증거 발견하여 이혼 및 위자료 청구 인용</li>
            <li>[이혼] 증거보전결정 통해 영상녹화물을 증거로 제출하여 이혼 및 위자료 청구 인용</li>
            <li>[이혼] 은행계좌에 대한 철저한 분석을 통해 상대방의 1억 5천만 원 채무를 상대방만 책임지도록 하는 재산분할 판결 도출</li>
            <li>[이혼] 유책배우자 대리 사건에서 조정기일에 재산분할만 하도록 하는 조정 성립 도출</li>
            <li>[상속재산] 상속재산분할, 유류분반환 소송 및 소송외 상속재산 관련 분쟁 해결</li>
            <li>[가사일반] 한정승인, 상속포기, 성년후견심판청구 등 다수 수행</li>
          </ul>

          
          <span class="case-tag2">민사</span>
          <ul class="case-list">
            <li>[민사일반] 대여금, 손해배상, 부당이득반환, 임차보증금반환, 건물인도, 소유권이전, 청구이의의 소 등 다수 수행</li>
          </ul>

          <span class="case-tag2">개인회생 · 파산</span>
          <ul class="case-list">
            <li>[개인회생] 급여소득자, 영업소득자 개인회생 사건 다수 수행</li>
            <li>[파산] 파산 및 면책 사건 다수 수행</li>
          </ul>
        </section>
      </main>
    </div>
  </section>
</template>

<script setup>
// 정적 페이지 – 로직 없음
</script>

<style scoped>
.member-detail {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont,
               'Apple SD Gothic Neo', 'Noto Sans KR',
               'Segoe UI', Roboto, Arial, sans-serif;
  padding: 130px 60px 80px ;
  background: #ffffff;

}

.member-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
}

/* ===============================
   Profile Area
================================ */

.profile-area {
  width: 400px;
  flex-shrink: 0;
}

.profile-image {
  width: 100%;
  display: block;
}

.contact-box {
  margin-top: 15px;
  font-size: 20px;
  color: #333;
}
.contact-item {
  display: flex;
  align-items: center;        /* 🔥 핵심 */
  gap: 10px;

  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;           /* 🔥 baseline 흔들림 방지 */
  color: #424242;

  margin: 5px;
}
.contact-item a {
  color: inherit;
  text-decoration: none;
}
.contact-icon {
  width: 20px;
  margin: 5px;
  
  display: block;             /* 🔥 inline-svg baseline 제거 */
  flex-shrink: 0;
}
/* ===============================
   Info Area
================================ */

.info-area {
  flex: 1;
}

/* Header */
.member-header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-mark {
  width: 45px;
  height: auto;
  display: block;
}

.member-header h1 {
  font-size: 45px;
  font-weight: 700;
  color: #222;
  letter-spacing: 0.2em;

}

.member-header h1 small {
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #424242;
  letter-spacing: 0.1em;
}

.title-line {
  flex: 1;
  height: 2px;
  background: #004572;
  margin-left: 20px;
}

/* ===============================
   Sections
================================ */

.info-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 16px;
  position: relative;
  padding-left: 12px;
}

.section-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 3px;
  height: 20px;
  background: #004572;
}

.text-list,
.case-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.text-list li,
.case-list li {
  font-size: 19px;
  color: #424242;
  line-height: 1.6;
  margin-bottom: 3px;
}

/* Tag */
.case-tag {
  display: inline-block;
  background: #004572;
  color: #fff;
  font-size: 15px;
  padding: 6px 14px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.case-tag2 {
  display: inline-block;
  background: #004572;
  color: #fff;
  font-size: 15px;
  padding: 6px 14px;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 12px;
}

/* ===============================
   Responsive
================================ */

@media (max-width: 1024px) {
  .member-container {
    gap: 48px;
  }

  .profile-area {
    width: 300px;
  }
}

/* =========================================================
   Member Detail – Mobile Responsive
========================================================= */

@media (max-width: 768px) {

  .info-area {
    display: contents;
  }
  /* ===============================
     전체 레이아웃: 1컬럼 강제
  =============================== */
  .member-container {
    display: flex;
    flex-direction: column;   /* 🔥 이 줄이 핵심 */
    padding: 10px 16px;
    gap: 24px;
  }

  .profile-area,
  .info-area {
    width: 100%;              /* 🔥 PC 비율 제거 */
    max-width: none;
  }

  

  /* ===============================
     프로필 영역
  =============================== */
  .profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-image {
    margin-top: 70px;
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: cover;
  }

  /* 연락처 카드 */
  .contact-box {
    width: 100%;
    max-width: 320px;
    padding: 2px 14px;
    border-radius: 10px;
    background-color: rgb(235, 235, 235);
  }

  .contact-item {
    font-size: 14px;
    line-height: 1.3;
  }

  /* ===============================
     정보 영역
  =============================== */
  .info-area {
    padding: 0;
  }

  .member-header {
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .member-header h1 {
    font-size: 26px;
    letter-spacing: 0.04em;
  }

  .member-header h1 small {
    font-size: 13px;
  }

  .title-line {
    flex: none;          /* ❗ 핵심: flex 제거 */
    width: 100%;         /* 밑줄 */
    height: 2px;
    margin: 0;           /* 기존 margin-left 제거 */
    margin-top: 4px;
  }
  /* 섹션 */
  .info-section {
    margin-bottom: 28px;
  }

  .section-title {
    font-size: 20px;
  }

  .text-list li,
  .case-list li {
    font-size: 15px;
    line-height: 1.6;
  }

  /* 태그 */
  .case-tag,
  .case-tag2 {
    font-size: 12px;
    padding: 5px 10px;
  }

  
  /* ✅ 1) 페이지가 '가운데 카드'로 좁아지는 걸 강제로 해제 */
  .member-detail,
  .member-container,
  .profile-area,
  .info-area {
    max-width: none !important;
    width: 100% !important;
  }

  /* ✅ 2) 가운데 정렬(마진)로 생기는 공백 제거 */
  .member-detail,
  .member-container {
    margin: 0 !important;
  }

  /* ✅ 3) 화면은 꽉 쓰고, 좌우 패딩만 최소로 */
  .member-detail {
    padding: 10px 16px !important;
  }

  /* ✅ 4) 모바일은 1컬럼 */
  .member-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* 사진은 화면폭에 맞게 */
  .profile-image {
    width: 100%;
    height: auto;
    max-height: none;
    object-fit: contain;
  }

  /* 연락처는 줄바꿈 안 터지게 */
  .contact-box {
    padding: 12px 14px;
    border-radius: 10px;
  }

  .contact-item {
    font-size: 14px;
  }

  /* 타이틀/라인 모바일 최적화 */
  .member-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .title-line {
    width: 100%;
    margin-left: 0;
  }
}


</style>
