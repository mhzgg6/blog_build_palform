import { createApp } from "vue"
import App from "./App.vue"

import "./assets/styles/common/var.scss"
import themesConfig from "./assets/styles/common"

import router from "./router/index"
console.log(themesConfig);

const app = createApp(App)

app.use(router) //注册路由
app.mount("#app")
