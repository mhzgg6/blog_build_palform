import { ref } from "vue"

export function setThemes( themeConfig) {
  const state = ref({
    themeConfig,
    setting: {
      theme: "red-theme",
    },
  })
}
