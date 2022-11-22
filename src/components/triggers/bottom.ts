import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { BottomOptions } from '../options/bottom'
import { ButtonOptions } from '../options/common'
import { triggerBackground, triggerClick } from './common'

const { BOTTOM } = CLASS_NAMES

export const triggerBottom = (options: BottomOptions): void => {
    const bottomContainer: HTMLElement = getNode(BOTTOM)
    const defaultButtonContainer: HTMLElement = document.createElement('button')
    if (options.background != null) {
        triggerBackground(bottomContainer, options.background)
    }
    if (typeof (options.layout) == 'string') {
        const optionLayout: string = options.layout
        switch (optionLayout) {
            case 'left': bottomContainer.style.justifyContent = 'start'; break;
            case 'right': bottomContainer.style.justifyContent = 'end'; break;
            case 'center': bottomContainer.style.justifyContent = 'center'; break;
            default: break;
        }
    }
    if (options.button != null) {
        if (typeof (options.button) == 'string') {
            bottomContainer.appendChild(defaultButtonContainer)
            defaultButtonContainer.textContent = options.button
        } else if (Array.isArray(options.button)) {
            bottomContainer.innerHTML = ''
            bottomContainer.appendChild(defaultButtonContainer)
            const firstButton: ButtonOptions | string = options.button[0]
            if (typeof (firstButton) == 'string') {
                defaultButtonContainer.textContent = firstButton
            } else if (typeof (options.button[0]) == 'object') {
                defaultButtonContainer.textContent = firstButton.text as string
            }
            triggerClick(defaultButtonContainer, firstButton)
            if (options.button.length > 1) {
                for (let i = 1; i < options.button.length; i++) {
                    const newButtonContainer: HTMLElement = document.createElement('button')
                    if (typeof (options.button[i]) == 'string') {
                        newButtonContainer.textContent = options.button[i] as string
                    } else if (typeof (options.button[i]) == 'object') {
                        let buttonOptions = <ButtonOptions>Object.assign({}, options.button[i])
                        newButtonContainer.textContent = buttonOptions.text as string
                    }
                    bottomContainer.prepend(newButtonContainer)
                    triggerClick(newButtonContainer, options.button[i])
                }
            }
        }
    } else {
        bottomContainer.appendChild(defaultButtonContainer)
        defaultButtonContainer.textContent = "确定"
        defaultButtonContainer.style.backgroundColor = "#1677FF"
        defaultButtonContainer.style.color = "white"
        defaultButtonContainer.style.borderColor = 'inherit'
    }
}

export default triggerBottom