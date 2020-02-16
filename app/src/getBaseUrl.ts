export function getBaseUrl(url?: string) {
  if (url === undefined) return window.location.origin

  const urlAsArray = url.split('/');
  const doubleSlashIndex = url.indexOf("://")
  if (doubleSlashIndex !== -1 && doubleSlashIndex === url.indexOf("/")-1) urlAsArray.length = 3
  else urlAsArray.length = 1
  return urlAsArray.join("/")
}

export default getBaseUrl

window.location
