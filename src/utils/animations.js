// Allows element to be draggable
//  INPUT - 
//      container element id, draggable component inside that container 
//  OUTPUT - 
//      Moving position of the container in relation to the mouse
const dragElement = (containerId, toMoveId) => {
    const container = document.getElementById(containerId)
    let dragged = document.getElementById(toMoveId)

    const drag = ({ movementX, movementY }) => {
        dragged.style.cursor = 'grabbing'
        let styles = getComputedStyle(container) // get the container styles
        let left = parseInt(styles.left)
        let top = parseInt(styles.top)

        container.style.left = `${left + movementX}px`
        container.style.top = `${top + movementY}px`
    }

    dragged.addEventListener('mousedown', () => {
        dragged.style.cursor = 'grab'
        return dragged.addEventListener('mousemove', drag)
    })

    document.addEventListener('mouseup', () => {
        dragged.style.cursor = 'pointer'
        dragged.removeEventListener('mousemove', drag)
    })

    dragged.addEventListener('touchstart', () => {
        dragged.addEventListener('touchmove', drag)
    })

    dragged.addEventListener('touchend', () => {
        dragged.removeEventListener('touchmove', drag)
    })
}

export { dragElement }