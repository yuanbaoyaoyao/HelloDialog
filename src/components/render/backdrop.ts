import { modal, backdrop, outermost } from "../dom";
import { BackdropOptions } from '../options/backdrop'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import triggerBackdrop from '../triggers/backdrop'

const { BACKDROP, OUTERMOST } = CLASS_NAMES;

const renderBackdrop = (options: BackdropOptions): void => {
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.appendChild(backdrop)
    const backdropContainer: HTMLElement = getNode(BACKDROP)
    console.log("renderBackdropOptions:", options)
    triggerBackdrop(outermostContainer, backdropContainer, options)
}



export default renderBackdrop