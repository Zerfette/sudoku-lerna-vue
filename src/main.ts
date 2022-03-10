import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/index.vue'

createApp(App).use(createPinia()).mount('#app')
