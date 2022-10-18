export interface ActionPromiseState {
    resolve?: any
    reject?: any
}
export interface StretchState {
    isFullScreen: boolean
    beforeFullScreenMarginBottom: number
    beforeFullScreenMarginRight: number

    lastMarginRight: number
    lastMarginBottom: number
    firstDomLeft: number
    firstDomTop: number
    firstDomWidth: number
    firstDomHeight: number

    tempDomWidth: number
    tempDomHeight: number

    tempMarginRight: number
    tempMarginBottom: number

    tempMoveX: number
    tempMoveY: number

    stretchDistanceX: number
    stretchDistanceY: number
    firstStretchDistanceX: number
    firstStretchDistanceY: number
    reachHeightRange: number
    reachWidthRange: number
    heightRange: number
    widthRange: number

    topStretchClientY: number
}

export let stretchState: StretchState = {
    isFullScreen: false,
    beforeFullScreenMarginBottom: 0,
    beforeFullScreenMarginRight: 0,

    lastMarginRight: 0,
    lastMarginBottom: 0,
    firstDomLeft: 0,
    firstDomTop: 0,
    firstDomWidth: 0,
    firstDomHeight: 0,

    tempDomWidth: 0,
    tempDomHeight: 0,

    tempMarginRight: 0,
    tempMarginBottom: 0,

    tempMoveX: 0,
    tempMoveY: 0,

    stretchDistanceX: 0,
    stretchDistanceY: 0,
    firstStretchDistanceX: 0,
    firstStretchDistanceY: 0,
    reachHeightRange: 0,
    reachWidthRange: 0,
    heightRange: 0,
    widthRange: 0,

    topStretchClientY: 0
}

export let actionPromiseState: ActionPromiseState = {
    resolve: null,
    reject: null
}

export let isModalClosed: boolean = false
