import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const header: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.HEADER}">
        <button class="${CLASS_NAMES.CLOSE_BUTTON}"></button>
    </div>
    `
)