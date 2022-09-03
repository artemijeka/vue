import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './registerServiceWorker'

import router from './router'

// import 'materialize-css/dist/css/materialize.min.css'
// import './assets/main.scss'
// import 'materialize-css/dist/js/materialize.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
