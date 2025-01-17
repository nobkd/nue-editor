# Nue Editor

Interactively view and edit your [Nue](https://nuejs.org) project.

> [!Note]
> Currently not feeling like working more on this.
> So... expect no changes for a while.


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
addEventListener('popstate', send)
```

## Relevant sources

- https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/
- https://phuoc.ng/collection/html-dom/create-resizable-split-views/
