# Nue Editor

Interactively view and edit your Nue project

## Preparation

To let the editor know of page navigation, add the following code to a global JavaScript file, that is available in development mode:

```js
// message.js
function send() {
  parent.postMessage(location.toString(), '*')
}

addEventListener('load', send)
addEventListener('route', send)
// addEventListener('popstate', send)
```
