import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import globalState from '../../store'

const { HEADER, MODAL, FULL_SCREEN_BUTTON } = CLASS_NAMES
let modalContainer: HTMLElement
let headerContainer: HTMLElement

export const triggerHeader = (): void => {
    modalContainer = getNode(MODAL)
    headerContainer = getNode(HEADER)
    const fullScreenButton: HTMLElement = getNode(FULL_SCREEN_BUTTON)
    fullScreenButton.onmousedown = setFullScreen
    headerContainer.onmousedown = setMove
}

const setFullScreen = (): void => {
    if (!globalState.isFullScreen) {
        globalState.beforeFullScreenMarginBottom = parseFloat(modalContainer.style.marginBottom)
        globalState.beforeFullScreenMarginRight = parseFloat(modalContainer.style.marginRight)
        modalContainer.style.margin = "0"
        modalContainer.style.width = "100%"
        modalContainer.style.height = "100%"
        modalContainer.style.position = "fixed"
        modalContainer.style.display = "flex"
        modalContainer.style.flexDirection = "column"
        modalContainer.style.justifyContent = "space-between"
        headerContainer.style.cursor = "default"
    } else {
        modalContainer.style.width = "auto"
        modalContainer.style.height = "auto"
        modalContainer.style.marginRight = globalState.beforeFullScreenMarginRight + 'px'
        modalContainer.style.marginBottom = globalState.beforeFullScreenMarginBottom + 'px'
        headerContainer.style.cursor = "move"
    }
    globalState.isFullScreen = !globalState.isFullScreen
}

const setMove = (e: MouseEvent): void => {
    let moveDistanceX = e.clientX
    let moveDistanceY = e.clientY

    if (modalContainer.style.marginRight) {
        globalState.lastMarginRight = parseFloat(modalContainer.style.marginRight)
    }
    if (modalContainer.style.marginBottom) {
        globalState.lastMarginBottom = parseFloat(modalContainer.style.marginBottom)
    }
    //应该记录margin值

    document.onmousemove = (e: MouseEvent): void => {
        headerContainer.style.userSelect = 'none'
        modalContainer.style.userSelect = 'none'

        let x: number = e.clientX - moveDistanceX
        let y: number = e.clientY - moveDistanceY

        if (-x + globalState.lastMarginRight / 2 > -globalState.firstDomLeft + globalState.widthRange / 2 && -x + globalState.lastMarginRight / 2 < globalState.firstDomLeft - globalState.widthRange / 2) {
            modalContainer.style.marginRight = `${-x * 2 + globalState.lastMarginRight}px`
            globalState.tempMarginRight = -x * 2 + globalState.lastMarginRight
        }

        if (-y + globalState.lastMarginBottom / 2 > -globalState.firstDomTop + globalState.heightRange / 2 && -y + globalState.lastMarginBottom / 2 < globalState.firstDomTop - globalState.heightRange / 2) {
            modalContainer.style.marginBottom = `${-y * 2 + globalState.lastMarginBottom}px`
            globalState.tempMarginBottom = -y * 2 + globalState.lastMarginBottom
        }
    }
    document.onmouseup = (): void => {
        globalState.firstStretchDistanceX = 0
        globalState.firstStretchDistanceY = 0
        headerContainer.style.userSelect = 'auto'
        modalContainer.style.userSelect = 'auto'
        document.onmousemove = null
        document.onmouseup = null
    }
}

export default triggerHeader