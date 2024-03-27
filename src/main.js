import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createHead } from 'unhead'
const head = createHead()
const pinia = createPinia()
createApp(App).use(router).use(head).use(pinia).mount('#app')
