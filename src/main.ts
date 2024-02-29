import { createApp } from "vue"
import App from "./App.vue"

import "./assets/styles/common/var.scss"
import "./assets/styles/common/index.js"

import router from "./router/index"

const app = createApp(App)

app.use(router) //注册路由
app.mount("#app")
