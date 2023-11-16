import { createApp } from 'vue'
import './assets/scss/style.scss'

//import router 
import { router } from './router/index';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//import fontawsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

library.add(faPaperPlane);

import App from './App.vue'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
