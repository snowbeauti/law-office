<template>
  <section class="consult-form">
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

      <!-- 첨부파일 -->
      <div class="row">
        <label>첨부파일</label>
        <div class="file-box">
          <span>{{ fileName || '선택된 파일 없음' }}</span>
          <input
            type="file"
            @change="onFileChange"
          />
        </div>
      </div>

      <!-- 개인정보 동의 -->
      <div class="agree">
        <label>
          <input type="checkbox" v-model="agree" />
          개인정보 수집·이용 동의
        </label>
        <a @click.prevent="openPolicy">전문보기</a>
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
  file: null
})

const agree = ref(false)
const fileName = ref('')

const onFileChange = (e) => {
  const files = e.target.files
  form.file = files.length ? files[0] : null
  fileName.value = form.file?.name || ''
}

function openPolicy() {
  alert('개인정보 처리방침 페이지 연결')
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
.consult-form form {
  margin-top: 50px;
  border-top: 2px solid #838282;
}
.consult-form {
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

.select{
  cursor: pointer;
}

</style>

