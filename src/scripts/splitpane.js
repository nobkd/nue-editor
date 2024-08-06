// https://phuoc.ng/collection/html-dom/create-resizable-split-views/

export function createHandlers(resizer) {
    const prev = resizer.previousElementSibling
    const next = resizer.nextElementSibling
    const parent = resizer.parentNode

    const elToResize = prev.style.width ? prev : next
    const factor = elToResize === next ? -1 : 1

    const el = document.createElement('div')
    el.className = 'splitter-overlay'

    let x = 0
    let width = 0

    function mouseDownHandler($event) {
        parent.insertAdjacentElement('afterbegin', el)

        x = $event.clientX
        width = elToResize.getBoundingClientRect().width
        console.log(width)

        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', mouseUpHandler)
    }

    function mouseMoveHandler($event) {
        const dx = $event.clientX - x
        // console.log(width, dx, width + dx)
        elToResize.style.width = `${((width + dx * factor) * 100) / parent.getBoundingClientRect().width}%`
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)
        el.remove()
    }

    return { mouseDownHandler, mouseMoveHandler, mouseUpHandler }
}
