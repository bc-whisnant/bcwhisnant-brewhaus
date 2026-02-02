import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueAwesomePaginate)
app.use(router)
app.mount('#app')