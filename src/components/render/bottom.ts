import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { CONFIRM_BUTTON, CANCEL_BUTTON } = CLASS_NAMES;

const renderBottom = (): void => {
    const confirmButton: Node = getNode(CONFIRM_BUTTON)
    const cancelButton: Node = getNode(CANCEL_BUTTON)
    confirmButton.textContent = "确定"
    cancelButton.textContent = "取消"
}

export default renderBottom