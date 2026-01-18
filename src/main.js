// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'

const app = createApp(App)          // ① 먼저 app 생성

app.config.globalProperties.$base = import.meta.env.BASE_URL  // ② 그 다음 주입

app.use(router).mount('#app')       // ③ 마지막에 mount
