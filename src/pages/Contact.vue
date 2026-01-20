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
          <option value="">선택해주세요</option>
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
          <input v-model="form.phone" placeholder="연락처를 입력하세요."  maxlength="13" type="tel" inputmode="numeric" pattern="[0-9]*" 
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

      <!-- 첨부파일 여부 -->
      <div class="row">
        <label class="row-label">첨부파일</label>

        <div class="row-content">
          
          <label class="radio">
            <input
              type="radio"
              value="N"
              v-model="form.hasFile"
            />
            무
          </label>

          <label class="radio">
            <input
              type="radio"
              value="Y"
              v-model="form.hasFile"
            />
            유
          </label>

        </div>
      </div>


      <!-- 개인정보 동의 -->
      <div class="agree">
        <label>
          <input type="checkbox" v-model="agree" />
          개인정보 수집·이용 동의
        </label>
        <RouterLink to="/PrivacyPolicy" class="policy-link">
          전문보기
        </RouterLink>
      </div>

      <!-- 버튼 -->
      <div class="buttons">
        <button class="submit">작성완료</button>
      </div>

    </form>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

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
  hasFile: 'N'   // 기본값: 무
})

const agree = ref(false)
const fileName = ref('')

const onFileChange = (e) => {
  const files = e.target.files
  form.file = files.length ? files[0] : null
  fileName.value = form.file?.name || ''
}


function submitForm() {
  if (!agree.value) {
    alert('개인정보 수집·이용 동의가 필요합니다.')
    return
  }

  // 연락처 숫자 검증
  if (!/^[0-9]{9,11}$/.test(form.phone)) {
    alert('연락처는 숫자만 입력해주세요.')
    return
  }


  console.log(form)
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
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid #ddd;
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


</style>

