import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { BottomOptions } from '../options/bottom';
import { triggerBackground, triggerClick } from './common';

const { BOTTOM } = CLASS_NAMES;

//设置hover style
export const triggerBottom = (options: BottomOptions): void => {
    console.log("triggerBottomOptions:", options)
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
            defaultButtonContainer.textContent = options.button[0]
            triggerClick(defaultButtonContainer, options.button[0])
            if (options.button.length > 1) {
                for (let i = 1; i < options.button.length; i++) {
                    const newButtonContainer: HTMLElement = document.createElement('button')
                    newButtonContainer.textContent = options.button[i]
                    bottomContainer.prepend(newButtonContainer)
                    triggerClick(newButtonContainer, options.button[i])
                }
            }
        }
    }
}

export default triggerBottom