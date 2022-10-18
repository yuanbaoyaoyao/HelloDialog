interface ClassNameList {
    [key: string]: string
}

const addPrefix = (keys: ClassNameList): ClassNameList => {
    for (let index in keys) {
        keys[index] = 'hello-' + keys[index]
    }
    return keys
}

export const CLASS_NAMES: ClassNameList = addPrefix({
    RIGHT_STRETCH: 'right-stretch',
    TOP_STRETCH: 'top-stretch',
    BOTTOM_STRETCH: 'bottom-stretch',
    LEFT_STRETCH: 'left-stretch',
    TOP_RIGHT_STRETCH: 'top-right-stretch',
    TOP_LEFT_STRETCH: 'top-left-stretch',
    BOTTOM_RIGHT_STRETCH: 'bottom-right-stretch',
    BOTTOM_LEFT_STRETCH: 'bottom-left-stretch',

    OUTERMOST:'outermost',
    BACKDROP: 'backdrop',
    MODAL: 'modal',
    HEADER: 'header',
    FULL_SCREEN_BUTTON: 'full-screen-button',
    CLOSE_BUTTON: 'close-button',
    CONTENT: 'content',
    BOTTOM: 'bottom',
    // CONFIRM_BUTTON: 'confirm-button',
    // CANCEL_BUTTON: 'cancel-button'
})

export default CLASS_NAMES