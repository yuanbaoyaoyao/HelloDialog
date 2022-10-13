import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const outermost: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.OUTERMOST}">
    </div>
    `
)