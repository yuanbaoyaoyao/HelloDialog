import { IconOptions } from '../options/icons'
import CLASS_NAMES from '../classNames'
import { getNode } from '../../utils'

const { ICON_CONTAINER, ICON_ERROR, ICON_INFO, ICON_QUESTION, ICON_SUCCESS, ICON_WARNING } = CLASS_NAMES

const renderIcons = (options: IconOptions): void => {
    const iconContainer: HTMLElement = getNode(ICON_CONTAINER)
    let icon: HTMLElement = document.createElement("div")
    switch (options.iconName) {
        case 'success':
            iconContainer.classList.add(ICON_SUCCESS)
            const iconHtml = `
            <div class="${ICON_SUCCESS}-short-line"></div>
            <div class="${ICON_SUCCESS}-long-line"></div>
            `
            icon.innerHTML = iconHtml
            break;
        case 'error':
            icon.className = ICON_ERROR
            break;
        case 'info':
            icon.className = ICON_INFO
            break;
        case 'question':
            icon.className = ICON_QUESTION
            break;
        case 'warning':
            icon.className = ICON_WARNING
            break;
        default:
            break;
    }
    if (typeof (options.iconName) != 'undefined') {
        iconContainer.appendChild(icon)
        console.log("iconContainer:", iconContainer)
    }
}

export default renderIcons