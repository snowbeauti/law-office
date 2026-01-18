import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'

console.log('main.js 실행됨')

createApp(App)
  .use(router)
  .mount('#app')
