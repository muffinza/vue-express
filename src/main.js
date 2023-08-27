import { createApp } from 'vue'
import App from './components/App.vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/style.scss"
// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

//const app = createApp(App
//)

//createApp(App).use(store).use(router).mount('#app')
//App.use(BootstrapVue)

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.use(VueAxios,axios)