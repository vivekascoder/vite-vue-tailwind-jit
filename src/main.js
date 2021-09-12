import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './static/css/index.css'
import { pinia } from './store'

createApp(App).use(router).use(pinia).mount('#app')
