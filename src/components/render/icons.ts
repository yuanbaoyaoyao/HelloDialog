import { IconOptions } from '../options/icons'
import CLASS_NAMES from '../classNames'
import { getNode } from '../../utils'

const { ICON_CONTAINER, ICON_ERROR, ICON_INFO, ICON_QUESTION, ICON_SUCCESS, ICON_WARNING } = CLASS_NAMES

const renderIcons = (options: IconOptions): void => {
    const iconContainer: HTMLElement = getNode(ICON_CONTAINER)
    const icon: HTMLElement = document.createElement("div")
    switch (options.iconName) {
        case 'success':
            icon.className = ICON_SUCCESS
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
            if (typeof (options.iconName) != 'undefined') {
                iconContainer.appendChild(icon)
            }
            break;
    }
}

export default renderIcons