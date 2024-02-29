/**
 * 导出scss主题变量到js中
 */
import themes from "./index.module.scss"
console.log(themes)
const $themes = {}

for (let key in themes) {
  let keys = key.split("___")
  let temp = $themes
  for (let i = 0, l = keys.length; i < l; i++) {
    if (i == l - 1) {
      temp[keys[i]] = themes[key]
      continue
    }
    if (!temp[keys[i]]) {
      temp[keys[i]] = {}
    }
    temp = temp[keys[i]]
  }
}
console.log($themes)
export default $themes
