import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')