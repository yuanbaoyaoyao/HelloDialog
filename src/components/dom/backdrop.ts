import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const backdrop: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.BACKDROP}">
    </div>
    `
)