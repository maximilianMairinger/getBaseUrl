# Get base url

Get the host of an arbitrary url - relative or absulute or static. Suited for comparison with `location.host` to inquire whether an url is in local domain scope.

## Usage

```js
import getBaseUrl from "get-base-url"
const { getBaseUrl } = require("get-base-url")

getBaseUrl("https://maps.google.com/sub/")   // maps.google.com
getBaseUrl("maps.google.com/sub")            // maps.google.com
getBaseUrl("google.com")                     // google.com
getBaseUrl()                                 // The current host if in a browser or localhost of in node
getBaseUrl("relative")                       // The current host if in a browser or localhost of in node
getBaseUrl("./relative")                     // The current host if in a browser or localhost of in node
getBaseUrl("/absolute")                      // The current host if in a browser or localhost of in node
```

### Compare whether arbitrary url is in local domain scope

```js
import getBaseUrl from "get-base-url"
const { getBaseUrl } = require("get-base-url")

function isLocalUrl(url) {
  return getBaseUrl(url) === getBaseUrl()
}

isLocalUrl("sub")           // true
isLocalUrl("google.com")    // false
isLocalUrl("/google.com")   // true
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
