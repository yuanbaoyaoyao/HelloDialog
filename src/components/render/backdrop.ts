import { modal, backdrop } from "../dom";
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { BACKDROP, MODAL } = CLASS_NAMES;

const renderBackdrop = (options: object | string): void => {
    document.body.appendChild(backdrop);
    const backdropContainer: Node = getNode(BACKDROP)
    backdropContainer.appendChild(modal)
}

export default renderBackdrop