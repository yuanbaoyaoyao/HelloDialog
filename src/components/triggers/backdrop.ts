import { backgroundOptions } from '../options/common'
import { BackdropOptions } from '../options/backdrop'
import { getNode } from '../../utils'
import CLASS_NAMES from '../classNames'
import { triggerBackground } from './common'

const { OUTERMOST, BACKDROP } = CLASS_NAMES;

export const triggerBackdrop = (options: BackdropOptions): void => {
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    const backdropContainer: HTMLElement = getNode(BACKDROP)
    if (options.closeModal) {
        backdropContainer.addEventListener('click', () => {
            document.body.removeChild(outermostContainer)
        })
    }
    if (options.background instanceof Object) {
        triggerBackground(backdropContainer, options.background)
    }
}

export default triggerBackdrop