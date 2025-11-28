import {createApp} from 'vue'
import App from './App.vue'
import router from "./router"

import './assets/style.css'
import 'material-design-icons-iconfont/dist/material-design-icons-no-codepoints.css'

const app = createApp(App);

app.use(router);

app.mount('#app')
