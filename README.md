# Nue Editor

Interactively view and edit your [Nue](https://nuejs.org) project.

> [!Warning]
> This project is in its early stages of development.  
> It is likely to changes or get abandoned, if I don't feel like it anymore :man_shrugging:

## Preparation

To let the editor know of page navigation, add the following code to a global JavaScript file, that is available in development mode:

```js
// message.js
function send() {
  parent.postMessage(location.toString(), '*')
}

addEventListener('load', send)
addEventListener('route', send)
// addEventListener('popstate', send) // TODO: check if needed
```
