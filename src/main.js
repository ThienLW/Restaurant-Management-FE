// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Add icons to the library
library.add(faTrashAlt, faPlus);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');