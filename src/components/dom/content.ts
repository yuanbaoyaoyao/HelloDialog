import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const content: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.CONTENT}">
        <p class="${CLASS_NAMES.HEADER_TITLE}">这是标题</p>
        <div>这是body</div>
    </div>
    `
)