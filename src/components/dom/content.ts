import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const content: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.CONTENT}">这是body
    </div>
    `
)