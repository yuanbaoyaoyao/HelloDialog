import { backgroundOptions } from '../options/commonOptions'
import { BackdropOptions } from '../options/backdrop'

export const triggerBackdrop = (outermostContainer: HTMLElement, backdropContainer: HTMLElement, options: BackdropOptions): void => {
    console.log("triggerBackdropOptions:", options)
    console.log("1")
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

export default triggerBackdrop