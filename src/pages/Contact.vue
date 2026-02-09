<template>
  <section class="contact-form">
    <!-- 상단 문구 -->
    <h2 class="contact-title">
      혼자 고민하지 마세요. <span class="brand_color">위안</span>이 듣겠습니다.
    </h2>
    <form @submit.prevent="submitForm">

      <!-- 상담분야 -->
      <div class="row">
        <label>상담분야</label>
        <select v-model="form.category" class="select">
          <option value="" disabled hidden>선택해주세요</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      <!-- 이름 / 연락처 -->
      <div class="row two">
        <div>
          <label>이름</label>
          <input v-model="form.name" placeholder="이름을 입력하세요." maxlength="10"/>
        </div>
        <div>
          <label>연락처</label>
          <input v-model="form.phone" placeholder="연락처를 입력하세요."  maxlength="11" type="tel" inputmode="numeric" pattern="[0-9]*" 
            @input="form.phone = form.phone.replace(/[^0-9]/g, '')"/>
        </div>
      </div>

      <!-- 이메일 -->
      <div class="row">
        <label>이메일</label>
        <input
          v-model="form.email"
          placeholder="이메일을 입력하세요."
          type="email"
          @input="sanitizeEmail"
        />
      </div>

      <!-- 제목 -->
      <div class="row">
        <label>제목</label>
        <input v-model="form.title" placeholder="제목을 입력하세요."  maxlength="40" />
      </div>

      <!-- 내용 -->
      <div class="row">
        <label>내용</label>
        <textarea v-model="form.content"></textarea>
      </div>


      <!-- 개인정보 동의 -->
      <div class="agree">
        <label>
          <input type="checkbox" v-model="agree" />
          개인정보 수집·이용 동의
        </label>
        <RouterLink to="/privacyConsent" class="policy-link">
          전문보기
        </RouterLink>
      </div>

      <!-- 버튼 -->
      <div class="buttons">
        <button class="submit">작성완료</button>
      </div>

      <input
        type="text"
        v-model="form.hp"
        autocomplete="off"
        tabindex="-1"
        style="display:none"
      />
    </form>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'

const categories = [
  '민사', '형사', '회생∙파산', '가사',
  '기업법무', '건설∙부동산', '인사∙노무', '행정', '기타'
]

const form = reactive({
  category: '',
  name: '',
  phone: '',
  email: '',
  title: '',
  content: '',
})

const agree = ref(false)
const fileName = ref('')

const onFileChange = (e) => {
  const files = e.target.files
  form.file = files.length ? files[0] : null
  fileName.value = form.file?.name || ''
}

const isSending = ref(false)

function submitForm() {

  if (
    !form.category ||
    !form.name.trim() ||
    !form.phone.trim() ||
    !form.email.trim() ||
    !form.title.trim() ||
    !form.content.trim()
  ) {
    alert('상담분야, 이름, 연락처, 이메일, 제목, 내용을 모두 입력해주세요.')
    return
  }

  // 연락처 숫자 검증
  if (!/^[0-9]{9,11}$/.test(form.phone)) {
    alert('연락처를 확인해주세요.')
    return
  }

  if (!agree.value) {
    alert('개인정보 수집·이용 동의가 필요합니다.')
    return
  }

  if (isSending.value) return
  isSending.value = true

  emailjs.send(
    'service_i8khjgb',
    'template_kbz30sk',
    {
      category: form.category,
      name: form.name,
      phone: form.phone,
      email: form.email,
      title: form.title,
      content: form.content,
    },
    '1YC9ggQvkl14_re0J'
  )
  .then(() => {
    alert(`상담 신청이 완료되었습니다.\n담당 변호사가 확인 후 ${form.phone} 번호로 연락 드리겠습니다`)
    
    // ✅ 페이지 리로드
    window.location.reload()
  })
  .catch((err) => {
    console.error(err)
    alert('상담 신청에 실패했습니다. 잠시 후 다시 시도해주세요.')
  })
  .finally(() => {
    setTimeout(() => {
      isSending.value = false
    }, 3000)
  })
}

function sanitizeEmail(e) {
  form.email = e.target.value
    .replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
    .replace(/\s/g, '')
    .replace(/[^a-zA-Z0-9@._-]/g, '')
}
</script>

<style scoped>
.contact-title{
  font-family: 'Pretendard';
  margin: 120px 0 50px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}
  
.contact-form form {
  margin-top: 50px;
  border-top: 2px solid #838282;
}
.contact-form {
  max-width: 900px;
  margin: 0 auto;
}

.row:first-child{
  margin-top: 30px;
}

.row {
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;
}

.row label {
  font-family: 'Pretendard';
  display: block;
  font-size: 18px;
  margin-bottom: 12px;
}

.row input,
.row select,
.row textarea {
  font-family: 'Pretendard';
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid #ddd;
  font-size: 18px;
  font-weight: 500;
}
.row select {
  font-family: 'Pretendard';
  font-weight: 500;
  color: #555;
} 

.checkbox input {
  width: auto;
  height: auto;
  padding: 0;
  border: none;
}
.agree input[type="checkbox"] {
  transform: scale(1.1); /* 대략 18×18 체감 */
  transform-origin: center; /* 🔥 기준점 명확히 */
  margin: 0;                /* 🔥 여백 리셋 */
}
.agree label {
  display: flex;
  align-items: center;   /* 🔥 수직 중앙 정렬 */
  gap: 6px;
}

textarea {
  min-height: 260px;
  line-height: 1.6;
}

.row.two {
  display: flex;
  gap: 24px;
}

.row.two > div {
  flex: 1;
}

.file-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px 12px;
}

.file-box input {
  display: none;
}

.agree {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 50px;
  border: none;
}

.submit {
  font-family: 'Pretendard';
  background: #0b2a6f;
  padding: 12px 40px;
  color: white;
  font-size: 18px;
  border: none;
}

.row-label {
  font-family: 'Pretendard';
  display: block;
  font-size: 18px;
  margin-bottom: 12px;
}

.row-content {
  display: flex;
  align-items: center;
  gap: 20px;
}
.radio {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
}

.radio input {
  width: auto;
  height: auto;
  padding: 0;
  border: none;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
}
.row select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.row select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 14px;

  padding-right: 48px; /* 🔥 이제 진짜 여백 */
}
.policy-link {
  color: #0b2a6f;                 /* 링크 컬러 */
  text-decoration: underline;     /* 🔥 밑줄 */
  text-underline-offset: 3px;     /* 밑줄과 글자 간격 */
  cursor: pointer;
  font-weight: 500;
}

.policy-link:hover {
  color: #061c4a;                 /* hover 시 살짝 진하게 */
  text-decoration-thickness: 2px; /* hover 시 강조 */
}

@media (max-width: 768px) {
  .contact-form {
    padding: 50px 20px;
  }
  .contact-title {
    margin-top: 0px;
    font-size: 1.12rem;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .contact-form form{
    margin-top: 0px;
  }
  .row:first-child{
    margin-top: 0px;
  }
  .contact-form form {
    border-top: 1px solid #838282;
  }

  .row label {
    font-size: 15px;
  }

  .checkbox {
    font-size: 14px;
  }
  
  .radio {
    font-size: 14px;
  }
  .agree label {
    font-size: 16px;
  }
  .buttons{
    margin-bottom: 0px;
  }

}

</style>

