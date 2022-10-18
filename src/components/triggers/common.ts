import { BackdropOptions } from "../options/backdrop"
import { backgroundOptions } from "../options/common"
import { actionPromiseState } from '../../store'

export const triggerBackground = (container: HTMLElement, options: backgroundOptions | string) => {
    if (typeof (options) == 'object') {
        const finalBackgroundOptions: backgroundOptions = Object.assign({}, options)
        if (finalBackgroundOptions.color != null) {
            container.style.backgroundColor = finalBackgroundOptions.color
        }
        if (finalBackgroundOptions.picUrl != null) {
            container.style.backgroundImage = 'url(' + finalBackgroundOptions.picUrl + ')'
        }
        if (finalBackgroundOptions.picRepeat != null) {
            container.style.backgroundRepeat = finalBackgroundOptions.picRepeat
        }
        if (finalBackgroundOptions.picSize != null) {
            container.style.backgroundSize = finalBackgroundOptions.picSize
        }
        if (finalBackgroundOptions.picPosition != null) {
            container.style.backgroundPosition = finalBackgroundOptions.picPosition
        }
    } else if (typeof (options) == 'string') {

    }
}

export const triggerClick = (container: HTMLElement, value: string) => {
    container.onclick = () => {
        actionPromiseState.resolve(value)
    }
}