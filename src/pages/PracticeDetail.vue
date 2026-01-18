<template>
  <main class="practice-detail page">
    <!-- 제목 -->
    <header class="practice-header">
      <h1>{{ data.title }}</h1>
      <div class="title-line"></div>
    </header>

    <!-- 핵심 문장 -->
    <p class="practice-lead">
      {{ data.lead }}
    </p>

    <!-- 강조 설명 -->
    <div class="practice-highlight">
      <p>{{ data.highlight }}</p>
    </div>

    <!-- 주요 업무 -->
    <ul class="practice-list">
      <li v-for="(item, i) in data.items" :key="i">
        {{ item }}
      </li>
    </ul>

    <!-- ===== 주요 성공사례 ===== -->
    <section
      v-if="relatedCases.length"
      class="related-cases"
    >
      <!-- 헤더 -->
      <div class="related-header">
        <h3>주요 성공사례</h3>
        <router-link
          to="/cases"
          class="more-link"
        >
          더보기 →
        </router-link>
      </div>

      <!-- 카드 그리드 -->
      <div class="cases-grid">
        <div
          v-for="item in relatedCases"
          :key="item.id"
          class="case-card"
          @click="goCaseDetail(item)"
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

          <h4 class="title">{{ item.title }}</h4>

          <p class="overview">
            {{ item.overview.replace(/\n/g, '').slice(0, 70) }}...
          </p>
        </div>
      </div>
    </section>
  </main>
</template>



<script setup>

import { computed } from 'vue'
import { cases } from '../data/cases'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const currentCategory = computed(() => route.params.title)

const items = [
  {
    title: '민사',
    lead: '소중한 재산과 권리, 끝까지 찾아내고 지켜냅니다.',
    highlight: 
        '민사 소송은 사실관계 입증과 법리 해석 싸움입니다. 법률사무소 위안은 사건 초기 단계부터 증거를 수집하고 의뢰인에게 가장 유리한 전략을 수립하여 확실한 권리 구제를 돕습니다.',
    items: [
        '손해배상 : 불법행위, 계약 불이행, 위자료, 교통사고, 학교폭력',
        '금전 청구 : 대여금, 투자금, 물품대금, 임대차보증금, 부당이득금, 채권 추심',
        '보전 처분 : 가압류, 가처분 신청',
        '계약 분쟁 : 계약 해제∙해지, 위약금 청구, 무효 확인'
    ]
    },
    {
    title: '형사',
    lead: '한순간의 위기, ‘골든타임’을 놓치지 마십시오.',
    highlight: '형사 사건의 결과는 초동 대처에 달려 있습니다. 법률사무소 위안은 경찰 조사 단계부터 변호인이 동석하여 불리한 진술을 막고, 억울함을 적극적으로 소명하여 최상의 결과(불송치, 무죄, 기소유예 등)를 이끌어냅니다.',
    items: [
        '검찰/경찰 단계에서의 수사 대응',
        '형사재판 변호',
        '피해자 고소 대리/합의 대리',
        '경제범죄, 성범죄, 마약범죄, 교통범죄, 폭력범죄 등'
    ]
    },
    {
    title: '회생·파산',
    lead: '과도한 빚의 굴레, 다시 일어설 수 있는 ‘법적 기회’를 만듭니다.',
    highlight: '채무로 인한 고통은 혼자 해결하기 어렵습니다. 법원이 주관하는 공적 채무조정 제도를 통해 이자는 물론 원금까지 탕감받고, 경제적 재기를 할 수 있도록 꼼꼼하게 설계해 드립니다.',
    items: [
        '개인 회생/파산',
        '법인 회생/파산',
        '일반 회생',
        '간이 회생'
    ]
    },
    {
    title: '가사',
    lead: '가족간의 분쟁, 아픈 마음까지 헤아리며 더 나은 내일을 준비합니다.',
    highlight: '가사 사건은 법적인 문제인 동시에 감정적인 문제입니다. 의뢰인의 상처를 최소화하면서도, 미래를 위한 권리는 단호하게 확보합니다.',
    items: [
        '이혼 및 재산분할, 위자료 청구 소송, 친권 및 양육자 지정, 양육비 청구 및 이행명령  소송',
        '상속재산분할 및 유류분 반환 청구, 한정승인/상속포기',
        '상속준비 및 후견',
        '친생자 관계 및 입양 관련 자문 및 소송'
    ]
    },
    {
    title: '기업법무',
    lead: '스타트업 설립부터 경영권 분쟁까지, 비즈니스의 든든한 법률 파트너',
    highlight: '기업 운영 중 발생하는 법적 리스크는 사전에 예방하는 것이 비용을 아끼는 지름길입니다. 단순 자문을 넘어 회사의 성장 단계에 맞춘 실질적인 법률 솔루션을 제공합니다.',
    items: [
        '법인 설립/운영 : 정관 작성, 주주간 계약서, 유상증자, 스톡옵션, 법인 등기',
        '계약 검토 : 각종 계약서 검토 및 법률 리스크 분석',
        '경영권 분쟁: 주주총회 결의 하자, 이사 직무집행정지, 업무상횡령∙배임',
        '기업 자문: 내용증명 발송, 미수금 회수, 영업비밀 및 지식재산권'
    ]
    },
    {
    title: '건설·부동산',
    lead: '복잡하게 얽힌 부동산 권리 관계, 명쾌한 해법을 제시합니다.',
    highlight: '부동산 분쟁은 큰 금액이 오가고 권리 관계가 복잡하여 전문적인 지식이 필수적입니다. 임대인과 임차인의 갈등부터 건설 현장의 분쟁까지 신속하게 해결합니다.',
    items: [
        '부동산 소송 : 명도 소송(상가∙주택), 보증금 반환 청구, 소유권 이전 등기',
        '건설 분쟁 : 공사대금 청구, 하도급 분쟁, 하자 보수 손해배상, 공매절차중지 가처분',
        '권리 분석 : 부동산 매매∙경매 관련 권리 분석 및 자문',
        '재개발/재건축 : 조합 관련 분쟁, 현금 청산 및 매도 청구'
    ]
    },
    {
    title: '인사·노무',
    lead: '노사 간의 갈등, 법과 원칙에 따른 합리적인 균형점을 찾습니다.',
    highlight: '근로자에게는 정당한 대우를, 기업에게는 적법한 인사 관리를 안내합니다. 잦은 법 개정으로 복잡해진 노동 사건을 명확하게 해결해 드립니다.',
    items: [
        '해고 사건 : 부당해고 구제 신청, 해고 무효 확인 소송',
        '징계 대응 : 정직∙감봉∙견책 등 부당 징계에 대한 구제 신청, 직장 내 괴롭힘 조사 및 대응',
        '임금 체불 : 퇴직금, 체당금, 통상임금 및 시간외수당 청구',
        '산업 재해 : 업무상 재해 인정, 산재 불승인 처분 취소',
        '기업 노무 자문 : 취업규칙 작성∙변경, 근로계약서 검토, 징계 절차 자문'
    ]
    },
    {
    title: '행정',
    lead: '노사 간의 갈등, 법과 원칙에 따른 합리적인 균형점을 찾습니다.',
    highlight: '행정청의 처분으로 억울한 피해를 입으셨나요? 행정심판과 행정소송은 처분이 있음을 안 날로부터 청구 기간의 제한이 있으므로 신속한 대응이 필요합니다.',
    items: [
        '영업 정지/취소: 영업정지 처분 취소 및 집행정지',
        '자격 정지/취소: 운전면허, 의사∙약사 등 전문직 자격 관련 처분 불복',
        '토지 수용: 토지 수용 보상금 증액 청구',
        '조세/부과금: 부당한 세금 부과, 이행강제금 부과 처분 취소'
    ]
    },
]
const data = computed(() =>
  items.find(item => item.title === route.params.title)
)
/* ===== 해당 업무분야의 성공사례 ===== */
const relatedCases = computed(() =>
  cases
    .filter(c =>
      c.categories.includes(currentCategory.value)
    )
    .sort((a, b) => b.id - a.id)   // 최신순
    .slice(0, 9)                   // 주요 성공사례 3개
)

const goCaseDetail = (item) => {
  router.push(`/cases/${item.id}`)
}

</script>
<style scoped>
.practice-detail {
  font-family: 'Pretendard';
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

/* 제목 */
.practice-header h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
}

.title-line {
  width: 100%;
  height: 3px;
  background: #004572;
  margin-bottom: 32px;
}

/* 한 줄 메시지 */
.practice-lead {
  font-family: 'Noto Serif KR', serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.6;
  margin-bottom: 36px;
}

/* 강조 블록 */
.practice-highlight {
  border-left: 4px solid #004572;
  padding-left: 16px;
  margin-bottom: 40px;
}

.practice-highlight p {
  font-size: 18px;
  line-height: 1.8;
}

/* 리스트 */
.practice-list {
  padding-left: 20px;
}

.practice-list li {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 10px;
}

/* ===== 주요 성공사례 ===== */
.related-cases {
  margin-top: 120px;
  padding-top: 80px;
  border-top: 1px solid #e5e5e5;
}

/* 헤더 */
.related-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.related-header h3 {
  position: relative;
  padding-left: 14px;
  font-size: 26px;
  font-weight: 600;
}

.related-header h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 22px;
  background: #004572;
}

.more-link {
  font-size: 15px;
  color: #0b4a7f;
  text-decoration: none;
}

/* 카드 그리드 */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* 카드 */
.case-card {
  border: 1px solid #e5e5e5;
  padding: 36px 34px 40px;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.15s ease;
  min-height: 260px;
}

.case-card:hover {
  border-color: #004572;
}

/* 배지 */
.badges {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.badge {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background-color: #004572;
  border-radius: 6px;
}

/* 카드 제목 */
.case-card .title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 14px;
  line-height: 1.45;
}

/* 카드 요약 */
.case-card .overview {
  font-size: 15px;
  line-height: 1.7;
  color: #666;
}

/* 모바일 */
@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}

</style>

