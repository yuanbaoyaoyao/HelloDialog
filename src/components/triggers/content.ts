import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { ContentOptions } from '../options/content';
import { triggerBackground, triggerClick } from './common';

const { CONTENT } = CLASS_NAMES;

export const triggerContent = (options: ContentOptions): void => {
    const contentContainer: HTMLElement = getNode(CONTENT)
    if (options.background != null) {
        triggerBackground(contentContainer, options.background)
    }
    if (typeof (options.layout) == 'string') {
        const optionLayout: string = options.layout
        switch (optionLayout) {
            case 'left': contentContainer.style.justifyContent = 'start'; break;
            case 'right': contentContainer.style.justifyContent = 'end'; break;
            case 'center': contentContainer.style.justifyContent = 'center'; break;
            default: break;
        }
    }
    if (options.type == 'text') {
        if (options.text != undefined) {
            contentContainer.textContent = options.text
        } else {
        }
    } else if (options.type == 'input') {

    }
}

export default triggerContent