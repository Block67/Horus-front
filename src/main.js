import { createApp } from 'vue'
import '../src/assets/css/output.css'
import '../src/assets/css/input.css'
import App from './App.vue'
import './registerServiceWorker'

createApp(App)
    .mount('#app');