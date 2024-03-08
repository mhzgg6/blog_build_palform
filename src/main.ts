import { createApp } from "vue"
import App from "./App.vue"

import "./assets/styles/common/var.scss"
import themesConfig from "./assets/styles/common"
import { setTheme } from "./utils/initTheme"
import router from "./router/index"

const app = createApp(App)

app.use(router) //注册路由
app.mount("#app").$nextTick(() => {
  // ......
  // 主题色初始化
  setTheme(themesConfig)
})
