export let globalState = {
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

export default globalState