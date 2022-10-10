import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const bottom: Node = stringToNode(
    `   
    <div class="${CLASS_NAMES.BOTTOM}">
        <button class="${CLASS_NAMES.CANCEL_BUTTON}"></button>
        <button class="${CLASS_NAMES.CONFIRM_BUTTON}"></button>
    </div>
    `
)