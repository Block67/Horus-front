import { createApp } from 'vue'
import router from './routes';
import '../src/assets/css/output.css'
import '../src/assets/css/input.css'
import App from './App.vue'



createApp(App)
    .use(router)
    .mount('#app');