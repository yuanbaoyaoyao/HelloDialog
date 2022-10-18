import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { stretchState } from '../../store'
import { HeaderOptions } from '../options/header'

const { HEADER, MODAL, FULL_SCREEN_BUTTON } = CLASS_NAMES
let modalContainer: HTMLElement
let headerContainer: HTMLElement

export const triggerHeader = (options: HeaderOptions): void => {
    console.log("headerOptions:", options)
    modalContainer = getNode(MODAL)
    headerContainer = getNode(HEADER)
    const fullScreenButton: HTMLElement = getNode(FULL_SCREEN_BUTTON)
    fullScreenButton.onmousedown = setFullScreen
    headerContainer.onmousedown = setMove
}

const setFullScreen = (): void => {
    if (!stretchState.isFullScreen) {
        stretchState.beforeFullScreenMarginBottom = parseFloat(modalContainer.style.marginBottom)
        stretchState.beforeFullScreenMarginRight = parseFloat(modalContainer.style.marginRight)
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
        modalContainer.style.marginRight = stretchState.beforeFullScreenMarginRight + 'px'
        modalContainer.style.marginBottom = stretchState.beforeFullScreenMarginBottom + 'px'
        headerContainer.style.cursor = "move"
    }
    stretchState.isFullScreen = !stretchState.isFullScreen
}

const setMove = (e: MouseEvent): void => {
    let moveDistanceX = e.clientX
    let moveDistanceY = e.clientY

    if (modalContainer.style.marginRight) {
        stretchState.lastMarginRight = parseFloat(modalContainer.style.marginRight)
    }
    if (modalContainer.style.marginBottom) {
        stretchState.lastMarginBottom = parseFloat(modalContainer.style.marginBottom)
    }
    //应该记录margin值

    document.onmousemove = (e: MouseEvent): void => {
        headerContainer.style.userSelect = 'none'
        modalContainer.style.userSelect = 'none'

        let x: number = e.clientX - moveDistanceX
        let y: number = e.clientY - moveDistanceY

        if (-x + stretchState.lastMarginRight / 2 > -stretchState.firstDomLeft + stretchState.widthRange / 2 && -x + stretchState.lastMarginRight / 2 < stretchState.firstDomLeft - stretchState.widthRange / 2) {
            modalContainer.style.marginRight = `${-x * 2 + stretchState.lastMarginRight}px`
            stretchState.tempMarginRight = -x * 2 + stretchState.lastMarginRight
        }

        if (-y + stretchState.lastMarginBottom / 2 > -stretchState.firstDomTop + stretchState.heightRange / 2 && -y + stretchState.lastMarginBottom / 2 < stretchState.firstDomTop - stretchState.heightRange / 2) {
            modalContainer.style.marginBottom = `${-y * 2 + stretchState.lastMarginBottom}px`
            stretchState.tempMarginBottom = -y * 2 + stretchState.lastMarginBottom
        }
    }
    document.onmouseup = (): void => {
        stretchState.firstStretchDistanceX = 0
        stretchState.firstStretchDistanceY = 0
        headerContainer.style.userSelect = 'auto'
        modalContainer.style.userSelect = 'auto'
        document.onmousemove = null
        document.onmouseup = null
    }
}

export default triggerHeader