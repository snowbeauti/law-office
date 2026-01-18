<template>
  <section class="directions-page">

    <div class="directions-wrap">

      <!-- ===== 지도 영역 ===== -->
      <div class="map-area">
        <div id="naver-map" class="map"></div>

        <!-- ===== 길찾기 버튼 ===== -->
        <div class="map-links">
          <a href="#" @click.prevent="openNaverMap" class="map-btn">
            <img src="/images/map/Primary_KR_Color.png" alt="네이버지도" />
          </a>

          <a href="#" @click.prevent="openKakaoMap" class="map-btn">
            <img src="/images/map/kakaomap_horizontal_ko.png" alt="카카오맵" />
          </a>

          <!-- 티맵: 로고 + 텍스트 -->
          <a href="#" @click.prevent="openTmap" class="map-btn tmap">
            <img src="/images/map/TMAP.svg" alt="티맵" />
            <span>티맵</span>
          </a>
        </div>

      </div>
      <!-- <div class="map-area">
        <a
          href="https://map.naver.com/p/entry/place/1986716726"
          target="_blank"
          rel="noopener"
        >
          <img
            src="/images/map_place.png"
            alt="법률사무소 위안 지도"
            class="map-preview"
          />
        </a>
      </div> -->

      <!-- ===== 정보 영역 ===== -->
      <div class="info-area">

        <!-- ✅ 여기로 이동 -->
        <h2 class="page-title">오시는 길</h2>

        <div class="office-name">
          <img src="/images/logo_blue.png" alt="위안 로고" class="logo" />
        </div>

        <ul class="info-list">
          <li>
            <img src="/icons/phone.svg" alt="전화" class="icon" />
            <span>02-6242-3080</span>
          </li>

          <li>
            <img src="/icons/printer.svg" alt="팩스" class="icon" />
            <span>02-6242-3081</span>
          </li>
          <li>
            <img src="/icons/map-pin.svg" alt="주소" class="icon" />
            <span>
              서울 서초구 서초대로 254, 1403호 (서초동, 오푸러스)
            </span>
          </li>

          <li id="way">
            <img src="/icons/subway.svg" alt="지하철" class="icon" />
            <span>
              <b>지하철 이용 시</b><br />
              2호선 서초역 1번 출구 (도보 1분)
            </span>
          </li>

          <li>
            <img src="/icons/bus.svg" alt="버스" class="icon" />
            <span>
              <b>버스 이용 시</b><br />
              서초역1번출구 하차 (040, 541, 740, 4435 등)<br />
              서초역 2번출구 하차 (서초21)
            </span>
          </li>

          <li>
            <img src="/icons/car.svg" alt="자차" class="icon" />
            <span>
              <b>자차 이용 시</b><br />
              오푸러스 주차장 이용
            </span>
          </li>
        </ul>

      </div>
    </div>

    

  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const LAT = 37.492108
const LNG = 127.0096568

onMounted(() => {
  const map = new naver.maps.Map('naver-map', {
    center: new naver.maps.LatLng(LAT, LNG),
    zoom: 16
  })

  new naver.maps.Marker({
    position: new naver.maps.LatLng(LAT, LNG),
    map
  })
})

function openNaverMap() {
  window.open(
    `https://map.naver.com/p/entry/place/1986716726`,
    '_blank'
  )
}

function openKakaoMap() {
  window.open(
    `https://map.kakao.com/link/search/법률사무소 위안`,
    '_blank'
  )
}

function openTmap() {
  const name = encodeURIComponent('법률사무소 위안')
  const lat = 37.492108
  const lng = 127.0096568

  window.location.href =
    `tmap://route?goalname=${name}&goalx=${lng}&goaly=${lat}`
}
</script>

<style scoped>
.directions-page {
  max-width: 1200px;
  margin: 0 auto 160px;
}

.page-title {
  display: flex;
  align-items: center;   /* ✅ 세로 중앙 기준 */
  gap: 16px;

  font-family: 'Pretendard';
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #164E78;
}

/* 오른쪽 가로 라인 */
.page-title::after {
  content: '';
  flex: 1;               /* 남은 영역 채우기 */
  height: 3px;
  background-color: #0b2a6f;
}
.directions-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: flex-start;
  margin-top: 100px;
}

/* 지도 */
.map {
  width: 100%;
  height: 550px;
  border: 1px solid #ddd;
}
.map-area {
  display: flex;
  flex-direction: column;
}

/* 지도 */
.map-preview {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border: 1px solid #ddd;
}

/* 정보 */
.info-area {
  display: flex;
  flex-direction: column;
}

#way{
 margin-top: 50px;
}

.office-name {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  font-size: 18px;
}

.logo {
  width: 150px;
  margin-bottom: 10px;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  font-family: 'Pretendard';
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  line-height: 1.6;
}

.info-list .icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* 하단 버튼 */
.map-links {
  display: flex;
  justify-content: center;   /* 중앙 정렬 */
  gap: 16px;

  margin-top: 32px;
}

.map-btn {
  width: 160px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;

  cursor: pointer;
  text-decoration: none;

  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.map-btn:hover {
  border-color: #0b2a6f;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

/* 로고 이미지 공통 */
.map-btn img {
  max-height: 24px;
  width: auto;
}

/* 티맵 전용 보정 */
.map-btn.tmap img {
  max-height: 20px; /* 로고 작게 */
}

.map-btn.tmap span {
  font-size: 14px;
  font-weight: 600;
  color: #222;
}
/* 반응형 */
@media (max-width: 900px) {
  .directions-wrap {
    grid-template-columns: 1fr;
  }

  .map {
    height: 360px;
  }
}
</style>
