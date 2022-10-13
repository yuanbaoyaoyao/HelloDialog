import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { BottomOptions } from '../options/bottom';

const { BOTTOM, CONFIRM_BUTTON, CANCEL_BUTTON } = CLASS_NAMES;

export const triggerBottom = (options: BottomOptions): void => {
    console.log("triggerBottomOptions:", options)
    
    const confirmButton: Node = getNode(CONFIRM_BUTTON)
    const cancelButton: Node = getNode(CANCEL_BUTTON)
    confirmButton.textContent = "确定"
    cancelButton.textContent = "取消"
    const bottomContainer: HTMLElement = getNode(BOTTOM)
}

export default triggerBottom