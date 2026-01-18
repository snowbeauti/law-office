<template>
  <section class="member-detail">
    <div class="member-container">

      <!-- 좌측 프로필 영역 -->
      <aside class="profile-area">
        <img
          class="profile-image"
          :src="`${$base}images/member_2.jpg`"
          alt="대표변호사 이태훈"
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
                    <a href="mailto:leeth@comfortlaw.co.kr">
                        E. leeth@comfortlaw.co.kr
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
              이태훈
            </h1>
          </div>
          <div class="title-line"></div>
        </header>

        <!-- 학력 -->
        <section class="info-section">
          <h2 class="section-title">학력</h2>
          <ul class="text-list">
            <li>성균관대학교 법학전문대학원 졸업</li>
            <li>성균관대학교 글로벌경영학과 졸업</li>
            <li>고등학교 졸업학력 검정고시</li>
          </ul>
        </section>

        <!-- 경력 -->
        <section class="info-section">
          <h2 class="section-title">경력</h2>
          <ul class="text-list">
            <li>(현) 법률사무소 위안 대표변호사</li>
            <li>한국공항공사 과태료심의위원</li>
            <li>한국MSD 파견 근무</li>
            <li>법무법인(유) 충정</li>
          </ul>
        </section>

        <!-- 주요 업무사례 -->
        <section class="info-section">
          <h2 class="section-title">주요 수행업무</h2>

          <span class="case-tag">기업법무 및 민사소송</span>
          <ul class="case-list">
            <li>[기업송무] 외국계 설비 기업 D사 대리, 물품대금 28억 원 청구 소송 전부 승소</li>
            <li>[손해배상] 나스닥 상장 글로벌 여행사 대리, 국내 소비자 및 기업 간 손해배상 청구 소송 승소 다수</li>
            <li>[가맹분쟁] 편의점 가맹본부 대리, 가맹점주 상대 약정금 청구 소송 승소 다수</li>
            <li>[IP/영업비밀] 글로벌 제조기업 S사 대리, 부정경쟁행위 금지 및 손해배상 청구 소송 전부 승소</li>
            <li>[부동산/건설] PF 관련 분쟁, 임대차보증금 반환, 소유권이전등기, 공유물분할 등 부동산 소송 승소 다수</li>
          </ul>

          
          <span class="case-tag2">형사</span>
          <ul class="case-list">
            <li>[성범죄] 성폭력범죄의처벌등에관한특례법위반(친족관계에의한강제추행) 무죄 판결</li>
            <li>[재산범죄] 사기 사건 고소 대리, 피고소인으로부터 합의금 7억 원 수령</li>
            <li>[기업형사] 스위스 헬스케어 기업 S사 대리, 국제 무역 사기 사건 피고인 징역 6년 실형 도출</li>
            <li>[보이스피싱] 보이스피싱 총책 변호, 몰수∙추징 청구 원천 차단 / 보이스피싱, 로맨스스캠 등 사기 피해자 고소 대리, 기소 도출 다수</li>
          </ul>

          
          <span class="case-tag2">노동 및 인사노무</span>
          <ul class="case-list">
            <li>[집단소송] 국내 최대 공기업 H사 대리, 근로자 340명 집단 임금 청구 소송 전부 승소</li>
            <li>[해고무효] 국내 유명 공기업 G사 대리, 해고무효확인 소송 사측 대리 승소</li>
            <li>[노동조합] J노동조합 및 I노동조합 대리, 집회 및 시위금지 가처분 신청 기각 도출</li>
          </ul>

          <span class="case-tag2">기업 자문 및 컴플라이언스</span>
          <ul class="case-list">
            <li>[공공기관] 한국공항공사를 위하여 법률 자문 수행 72건 / 한국동서발전을 위하여 법률 자문 수행 10건</li>
            <li>[금융/공공] 한국산업은행, 한국전력공사, 중소기업진흥공단, 한국교육학술정보원 등을 위하여 법률 자문 수행 다수</li>
            <li>[개인정보] 글로벌 제약사 M사를 위하여 개인정보보호법 준수 실사 양식 개정 및 컴플라이언스 자문</li> 
            <li>[사회공헌] 주한영국대사관을 위하여 성폭력 피해자 지원 매뉴얼 개정 자문</li>
          </ul>

          <span class="case-tag2">가사 및 기타</span>
          <ul class="case-list">
            <li>재판상 파양 청구 소송 승소 등 가사사건 수행 다수</li>
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
  background: #164E78;
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
  background: #164E78;
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
  color: #555;
  line-height: 1.6;
  margin-bottom: 3px;
}

/* Tag */
.case-tag {
  display: inline-block;
  background: #164E78;
  color: #fff;
  font-size: 15px;
  padding: 6px 14px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.case-tag2 {
  display: inline-block;
  background: #164E78;
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
