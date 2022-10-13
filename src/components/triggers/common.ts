import { backgroundOptions } from "../options/common"

export const triggerBackground = (container: HTMLElement, options: backgroundOptions) => {
    if (options.color != null) {
        container.style.backgroundColor = options.color
    }
    if (options.picUrl != null) {
        container.style.backgroundImage = 'url(' + options.picUrl + ')'
    }
    if (options.picRepeat != null) {
        container.style.backgroundRepeat = options.picRepeat
    }
    if (options.picSize != null) {

        container.style.backgroundSize = options.picSize
    }
    if (options.picPosition != null) {
        container.style.backgroundPosition = options.picPosition
    }

}