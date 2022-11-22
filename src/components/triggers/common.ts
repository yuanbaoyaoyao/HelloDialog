import { BackgroundOptions, ButtonOptions } from "../options/common"
import { actionPromiseState } from '../../store'

export const triggerBackground = (container: HTMLElement, options: BackgroundOptions | string) => {
    if (typeof (options) == 'object') {
        const finalBackgroundOptions: BackgroundOptions = Object.assign({}, options)
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

//添加loading
export const triggerClick = (container: HTMLElement, value: string | ButtonOptions) => {
    container.onclick = () => {
        if (typeof (value) == 'string') {
            actionPromiseState.resolve(value)
        } else {
            actionPromiseState.resolve(value.text)
        }
        // if(isLoading){
        //     container
        // }
    }
}

//通用属性触发
export const triggerCommonAttributes = () => {

}