import { createApp } from 'vue'
import './assets/scss/style.scss'

//import router 
import { router } from './router/index';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//import fontawsome



import App from './App.vue'


const app = createApp(App);
app.component();
app.use(router);
app.mount('#app');
