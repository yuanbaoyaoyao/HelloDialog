import { IconOptions } from '../options/icons'
import CLASS_NAMES from '../classNames'
import { getNode } from '../../utils'
import { icons } from '../dom/icons'

const { CONTENT, ICON_CONTAINER, ICON_ERROR, ICON_INFO, ICON_QUESTION, ICON_SUCCESS, ICON_WARNING } = CLASS_NAMES

const renderIcons = (options: IconOptions): void => {
    const modalContainer: HTMLElement = getNode(CONTENT)
    if (typeof (options.iconName) != 'undefined' && options.iconName != null) {
        modalContainer.prepend(icons)
        const iconContainer: HTMLElement = getNode(ICON_CONTAINER)
        let icon: HTMLElement = document.createElement("div")
        let iconHtml: string
        switch (options.iconName) {
            case 'success':
                iconContainer.classList.add(ICON_SUCCESS)
                iconHtml = `
                <svg class="${ICON_SUCCESS}-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 400 400">
                    <polyline class="${ICON_SUCCESS}-polyline" fill="none" stroke="#52C41A" 
                        stroke-width="24" 
                        points="88,214 173,284 304,138"
                        stroke-linecap="round" stroke-linejoin="round"></polyline>
                </svg>
                `
                icon.innerHTML = iconHtml
                break;
            case 'error':
                iconContainer.classList.add(ICON_ERROR)
                iconHtml = `
                <div class="${ICON_ERROR}-line-one"></div>
                <div class="${ICON_ERROR}-line-two"></div>
                `
                icon.innerHTML = iconHtml
                break;
            case 'info':
                iconContainer.classList.add(ICON_INFO)
                iconHtml = `
                <div class="${ICON_INFO}-dot"></div>
                <div class="${ICON_INFO}-line"></div>
                `
                icon.innerHTML = iconHtml
                break;
            case 'question':
                iconContainer.classList.add(ICON_QUESTION)
                iconHtml = `
                <div class="${ICON_QUESTION}-inner"></div>
                `
                icon.innerHTML = iconHtml
                break;
            case 'warning':
                iconContainer.classList.add(ICON_WARNING)
                iconHtml = `
                <div class="${ICON_WARNING}-dot"></div>
                <div class="${ICON_WARNING}-line"></div>
                `
                icon.innerHTML = iconHtml
                break;
            default:
                break;
        }
        iconContainer.appendChild(icon)
    }

}

export default renderIcons