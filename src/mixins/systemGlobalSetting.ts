import { ref } from "vue"
interface State {
  themeConfig: object
  setting: object
  currentTheme: object
}

const bodyClass = document.body.classList

export function setThemes(themeConfig) {
  const state = ref<State>({
    themeConfig,
    setting: {
      theme: "dark-theme",
    },
    currentTheme: {},
  })
  state.value.currentTheme = state.value.themeConfig[state.value.setting.theme]

  const setThemeVar = () => {
    let arr = []
    let styleEl = null
    styleEl = document.createElement("style")
    document.head.appendChild(styleEl)
    for (let key in state.value.currentTheme) {
      arr.push(`--t--${key}:${state.value.currentTheme[key]};`)
    }
    styleEl.innerHTML = `:root{${arr.join("")}}`
  }

  bodyClass.add(state.value.setting.theme)
  setThemeVar()
}
