import { HeaderOptions } from '../options/header'
import triggerHeader from '../triggers/header'
import CLASS_NAMES from '../classNames'
import { getNode } from '../../utils'

const { FULL_SCREEN_BUTTON, CLOSE_BUTTON, HEADER } = CLASS_NAMES

const renderHeader = (options: HeaderOptions): void => {
    const headerContainer: HTMLElement = getNode(HEADER)
    if (options.enableFullScreen) {
        const fullScreenButton: HTMLElement = document.createElement("button")
        fullScreenButton.className = FULL_SCREEN_BUTTON
        headerContainer.prepend(fullScreenButton)
    }
    if (!options.enableCloseModal) {
        const closeModalButton: HTMLElement = document.createElement("button")
        closeModalButton.className = CLOSE_BUTTON
        headerContainer.appendChild(closeModalButton)
    }
    triggerHeader(options)
}

export default renderHeader