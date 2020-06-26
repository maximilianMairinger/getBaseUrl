import { isBrowser } from "browser-or-node"

const dir = "/"
const localHost = "127.0.0.1/"


export function getBaseUrl(url?: string, prefix?: string) {
  if (url === undefined) return isBrowser ? (prefix !== undefined ? window.location.origin.replace(/http:\/\/|https:\/\//, prefix) : window.location.origin) + dir : (prefix !== undefined ? prefix : "http://") + localHost
  
  const urlAsArray = url.split(dir);
  const doubleSlashIndex = url.indexOf("://")
  if (doubleSlashIndex !== -1 && doubleSlashIndex === url.indexOf(dir)-1) {
    urlAsArray.length = 3
    let url = urlAsArray.join(dir)
    if (prefix !== undefined) url = url.replace(/http:\/\/|https:\/\//, prefix)
  }
  else {
    let pointIndex = url.indexOf(".")
    if (pointIndex !== -1 && pointIndex !== 0) {
      return (prefix !== undefined ? prefix : "https://") + urlAsArray[0]
    }
    else {
      if (isBrowser) {
        if (prefix !== undefined) return window.location.origin.replace(/http:\/\/|https:\/\//, prefix) + dir
        else return window.location.origin + dir
      }
      else return localHost
    }
  }
}

export default getBaseUrl
