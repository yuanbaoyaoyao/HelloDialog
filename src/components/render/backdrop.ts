import { backdrop } from "../dom";
import { BackdropOptions } from '../options/backdrop'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import triggerBackdrop from '../triggers/backdrop'

const { OUTERMOST } = CLASS_NAMES;

const renderBackdrop = (options: BackdropOptions): void => {
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.appendChild(backdrop)
    triggerBackdrop(options)
}

export default renderBackdrop