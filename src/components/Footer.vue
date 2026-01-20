<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- 좌측 정보 -->
      <div class="footer-info">
        <div class="footer-links">
          <RouterLink to="/PrivacyPolicy" class="footer-link">
            [개인정보처리방침]
          </RouterLink>
        </div>

        <p>
          법률사무소 위안 &nbsp;|&nbsp;
          대표변호사 이종호, 이태훈 &nbsp;|&nbsp;
          광고책임변호사 이태훈
        </p>
        <p>
          사업자등록번호 769-35-01319, 416-21-53070 &nbsp;|&nbsp;
          전화 02-6242-3080 &nbsp;|&nbsp;
          FAX 02-6242-3081
        </p>
        <p>
          주소 서울 서초구 서초대로 254, 1403호(서초동, 오퓨런스) &nbsp;|&nbsp;
          E-mail leeth@comfortlaw.co.kr
        </p>
      </div>

      <!-- 우측 로고 -->
      <div class="footer-logo">
        <img
          :src="`${$base}images/logo_white.png`"
          alt="법률사무소 위안"
        />
      </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-bottom-inner">
            Copyright © 2026 Comfort Law. All rights reserved.
        </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #004572;
  color: #ffffff;
  font-family: 'Pretendard';
  font-weight: 400;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 60px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-info {
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.95;
}

.footer-links {
  margin-bottom: 12px;
  font-weight: 600;
}

.footer-links span {
  cursor: pointer;
}

.footer-links .divider {
  margin: 0 8px;
  opacity: 0.6;
}

.footer-info p {
  margin: 2px 0;
}

.footer-logo img {
  width: 160px;
  height: auto;
  object-fit: contain;
}

/* 하단 카피라이트 */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.25);
}

.footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 60px;

  font-size: 13px;
  opacity: 0.8;
}

/* =========================
   Mobile
========================= */
@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    padding: 30px 20px;
  }

  .footer-logo {
    margin-top: 20px;
  }

  .footer-logo img {
    width: 120px;
  }

  .footer-bottom {
    padding: 14px 20px;
    text-align: center;
  }
  
  .footer-bottom-inner {
    padding: 14px 20px;
    text-align: center;
  }
}
</style>