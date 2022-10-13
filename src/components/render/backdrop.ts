import { modal, backdrop, outermost } from "../dom";
import { BackdropOptions } from '../options/backdrop'
import { backgroundOptions } from '../options/commonOptions'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { BACKDROP, OUTERMOST } = CLASS_NAMES;

const renderBackdrop = (options: BackdropOptions): void => {
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.appendChild(backdrop)
    console.log("outermoustContainer:", outermostContainer)
    const backdropContainer: HTMLElement = getNode(BACKDROP)
    handleOptions(outermostContainer, backdropContainer, options)
}

const handleOptions = (outermostContainer: HTMLElement, backdropContainer: HTMLElement, options: BackdropOptions) => {
    if (options.closeModal) {
        backdropContainer.addEventListener('click', () => {
            document.body.removeChild(outermostContainer)
        })
    }
    if (options.background instanceof Object) {
        const tempBackgroundOptions: backgroundOptions = Object.assign({}, options.background)
        if (tempBackgroundOptions.color != null) {
            backdropContainer.style.backgroundColor = tempBackgroundOptions.color
        }
        if (tempBackgroundOptions.picUrl != null) {
            backdropContainer.style.backgroundImage = 'url(' + tempBackgroundOptions.picUrl + ')'
        }
        if (tempBackgroundOptions.picRepeat != null) {
            backdropContainer.style.backgroundRepeat = tempBackgroundOptions.picRepeat
        }
        if (tempBackgroundOptions.picSize != null) {

            backdropContainer.style.backgroundSize = tempBackgroundOptions.picSize
        }
        if (tempBackgroundOptions.picPosition != null) {
            backdropContainer.style.backgroundPosition = tempBackgroundOptions.picPosition
        }

    }
}

export default renderBackdrop