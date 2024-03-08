import { ref } from "vue"
import { getThemeVar, addThemeStyle } from "./setTheme"
interface State {
  themeConfig: object
  setting: object
  currentTheme: object
}

const bodyClass = document.body.classList
const el = null

export function setTheme(themeConfig) {
  const state = ref<State>({
    themeConfig,
    setting: {
      theme: "dark-theme",
    },
    currentTheme: {},
  })
  state.value.currentTheme = state.value.themeConfig[state.value.setting.theme]
  bodyClass.add(state.value.setting.theme)

  const themeVar = getThemeVar(state.value.currentTheme)
  addThemeStyle(el, themeVar)
}
