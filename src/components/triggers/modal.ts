import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { BackgroundOptions } from '../options/common'
import { ModalOptions } from '../options/modal'

const { MODAL, OUTERMOST } = CLASS_NAMES;

export const triggerModal = (options: ModalOptions): void => {
    const modalContainer: HTMLElement = getNode(MODAL)
    if (options.background != null) {
        if (typeof (options.background) == 'object') {
            let tempBackgroundOptions: BackgroundOptions = Object.assign({}, options.background)
            if (tempBackgroundOptions.color != null) modalContainer.style.backgroundColor = tempBackgroundOptions.color
            if (tempBackgroundOptions.picUrl != null) modalContainer.style.backgroundImage = 'url(' + tempBackgroundOptions.picUrl + ')'
            if (tempBackgroundOptions.picRepeat != null) modalContainer.style.backgroundRepeat = tempBackgroundOptions.picRepeat
            if (tempBackgroundOptions.picSize != null) modalContainer.style.backgroundSize = tempBackgroundOptions.picSize
            if (tempBackgroundOptions.picPosition != null) modalContainer.style.backgroundPosition = tempBackgroundOptions.picPosition
        } else if (typeof (options.background) == 'string') {

        }
    }
    if (typeof (options.position) == 'string') modalContainer.style.position = options.position
    if (typeof (options.timer) == 'number') {
        setTimeout(() => {
            const outermostContainer: HTMLElement = getNode(OUTERMOST)
            document.body.removeChild(outermostContainer)
        }, options.timer)
    }
}

export default triggerModal