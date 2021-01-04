# Get base url

Get the base url (domain with protocol) of an string or the current one.

## Example

```js
import getBaseUrl from "get-base-url"
const { getBaseUrl } = require("get-base-url")

getBaseUrl("https://maps.google.com/sub/sub2")   // https://maps.google.com

getBaseUrl("maps.google.com/sub/sub2")           // https://maps.google.com

getBaseUrl("google.com")                         // https://google.com

getBaseUrl()                                     // The current url if in a browser

getBaseUrl("relative")                           // The current url if in a browser

getBaseUrl("./relative")                         // The current url if in a browser
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
