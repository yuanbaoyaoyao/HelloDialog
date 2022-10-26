import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const header: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.HEADER}">
        <p class="${CLASS_NAMES.HEADER_TITLE}">这是标题</p>
        <div>
            <button class="${CLASS_NAMES.CLOSE_BUTTON}"></button>
        </div>
    </div>
    `
)