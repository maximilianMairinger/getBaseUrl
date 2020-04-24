import { isBrowser } from "browser-or-node"

export function getBaseUrl(url?: string) {
  if (url === undefined) return isBrowser ? window.location.origin : ""

  const urlAsArray = url.split('/');
  const doubleSlashIndex = url.indexOf("://")
  if (doubleSlashIndex !== -1 && doubleSlashIndex === url.indexOf("/")-1) urlAsArray.length = 3
  else urlAsArray.length = 1
  return urlAsArray.join("/")
}

export default getBaseUrl

window.location
