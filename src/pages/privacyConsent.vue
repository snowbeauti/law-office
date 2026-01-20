<template>
  <section class="policy-wrap">
    <article class="policy-content">
      <h1>개인정보 수집∙이용 동의</h1>

      <h2>1. 개인정보의 수집∙이용 목적</h2>
      <p>
        법률사무소 위안은 다음의 목적을 위하여 개인정보를 수집 및 이용합니다.
      </p>

      <ul>
        <li>법률 상담 신청에 따른 본인 확인 및 식별</li>
        <li>상담 내용 파악 및 초기 법률 검토</li>
        <li>이해상충(쌍방대리 금지 등) 여부 확인</li>
        <li>상담 일정 예약, 변경 및 결과 통보를 위한 연락</li>
      </ul>

      <h2>2. 수집하려는 개인정보의 항목</h2>
      <p>[필수항목] 이름, 연락처, 상담 제목, 상담 내용</p>
      <p>[선택항목] 이메일</p>


      <h2>3. 개인정보의 보유 및 이용 기간</h2>
      <p>
        수집된 개인정보는 상담 완료 후 분쟁 해결, 민원 처리, 법령상 의무 이행을 위하여 3년간 보유∙이용됩니다.
      </p>
      <p>
        단, 수임 계약 체결 시에는 관련 법령 및 내부 규정에 따라 보존 기간이 연장될 수 있습니다.
      </p>

      <h2>4. 동의 거부 권리 및 불이익</h2>
      <p>귀하는 위와 같은 개인정보 수집 및 이용에 대해 동의를 거부할 권리가 있습니다.</p>
      <p>다만, 필수항목에 대한 동의를 거부할 경우 법률 상담 신청 및 답변 제공이 제한될 수 있습니다.</p>

    </article>
  </section>
</template>
<style scoped>
.policy-wrap {
  background: #ffffff;
  padding: 80px 20px;
}

.policy-content {
  max-width: 900px;
  margin: 0 auto;
  color: #222;
  line-height: 1.9;
  font-size: 15px;
}

.policy-content h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
}

.policy-content h2 {
  font-size: 20px;
  margin: 40px 0 12px;
  font-weight: 600;
}

.policy-content p {
  margin-bottom: 16px;
}

.policy-content ul {
  margin: 12px 0 24px 18px;
}

.policy-content li {
  margin-bottom: 8px;
}

/* 모바일 */
@media (max-width: 768px) {
  
  .policy-wrap {
    padding: 50px 16px;
  }

  .policy-content h1 {
    font-size: 24px;
  }

  .policy-content h2 {
    font-size: 18px;
  }

  .policy-content p {
    margin-bottom: 10px;
  }

  .policy-content ul {
    margin: 12px 0 24px 18px;
    padding-left: 5px;
  }

  .policy-content li {
    margin-bottom: 8px;
  }
}
</style>
