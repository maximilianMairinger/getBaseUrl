import { isBrowser } from "browser-or-node"

const dir = "/"
const localHost = "127.0.0.1"


export function getBaseUrl(url?: string) {
  if (url === undefined) return currentUrl()
  
  const urlAsArray = url.split(dir);
  const doubleSlashIndex = url.indexOf("://")
  if (doubleSlashIndex !== -1 && doubleSlashIndex === url.indexOf(dir)-1) {
    return urlAsArray[2]
  }
  else {
    const firstPointIndex = url.indexOf(".")
    const firstSlashIndex = url.indexOf(dir)
    if ((firstSlashIndex === -1 && firstPointIndex > 0 && firstPointIndex !== url.length-1) || (firstPointIndex < firstSlashIndex && !(url.startsWith(".") || url.startsWith(dir)))) {
      return urlAsArray[0]
    }
    else return currentUrl()
  }
}

function currentUrl() {
  if (isBrowser) return window.location.host
  else return localHost
}

export default getBaseUrl
