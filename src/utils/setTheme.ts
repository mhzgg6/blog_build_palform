export function getThemeVar(theme) {
  const themeVars: string[] = []
  for (const key in theme) {
    themeVars.push(`--t--${key}:${theme[key]};`)
  }
  return `:root{${themeVars.join("")}}`
}

export function addThemeStyle(el, content) {
  if (el) {
    el.innerHTML = content
  } else {
    el = document.createElement("style")
    document.head.appendChild(el)
    el.innerHTML = content
  }
}
