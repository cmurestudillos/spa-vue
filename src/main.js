import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes/index';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App)
.use(router)
.mount('#app')
