# Get base url

Get the base url (domain with protocol) of an string or the current one.

## Example

```js
import getBaseUrl from "get-base-url"

getBaseUrl("https://maps.google.com/sub/sub2")   // https://maps.google.com

getBaseUrl("maps.google.com/sub/sub2")           // maps.google.com

getBaseUrl("google.com")                         // google.com

getBaseUrl()                                     // The current url if in a browser
```

## Conribute

All feedback is appreciated. Create a pull request or write an issue.
