import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JavaScript
/* import $ from 'jquery'; */

// Make Bootstrap and jQuery available globally
/* app.config.globalProperties.$ = $; */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import router from './router/router';

library.add(faUserSecret)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);

app.mount('#app');

