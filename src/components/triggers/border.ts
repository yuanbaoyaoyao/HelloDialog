import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import  {stretchState} from '../../store'
import { BorderOptions } from '../options/border';

const { CONFIRM_BUTTON, HEADER, MODAL, RIGHT_STRETCH, TOP_STRETCH, BOTTOM_STRETCH, LEFT_STRETCH, TOP_RIGHT_STRETCH, TOP_LEFT_STRETCH, BOTTOM_RIGHT_STRETCH, BOTTOM_LEFT_STRETCH } = CLASS_NAMES;

let tempClassName: string = "";
let rightStretchContainer: HTMLElement
let topStretchContainer: HTMLElement
let bottomStretchContainer: HTMLElement
let leftStretchContainer: HTMLElement
let topRightStretchContainer: HTMLElement
let topLeftStretchContainer: HTMLElement
let bottomRightStretchContainer: HTMLElement
let bottomLeftStretchContainer: HTMLElement

export const triggerBorder = (options: BorderOptions): void => {
    rightStretchContainer = getNode(RIGHT_STRETCH)
    topStretchContainer = getNode(TOP_STRETCH)
    bottomStretchContainer = getNode(BOTTOM_STRETCH)
    leftStretchContainer = getNode(LEFT_STRETCH)
    topRightStretchContainer = getNode(TOP_RIGHT_STRETCH)
    topLeftStretchContainer = getNode(TOP_LEFT_STRETCH)
    bottomRightStretchContainer = getNode(BOTTOM_RIGHT_STRETCH)
    bottomLeftStretchContainer = getNode(BOTTOM_LEFT_STRETCH)

    if (options.enable) {
        if (typeof (options.selected) == 'string') {
            handleMousedown(options.selected)
        } else if (Array.isArray(options.selected)) {
            options.selected.filter(item => handleMousedown(item))
        } else if (options.selected == null) {
            rightStretchContainer.onmousedown = borderStretch
            topStretchContainer.onmousedown = borderStretch
            bottomStretchContainer.onmousedown = borderStretch
            leftStretchContainer.onmousedown = borderStretch
            topRightStretchContainer.onmousedown = borderStretch
            topLeftStretchContainer.onmousedown = borderStretch
            bottomRightStretchContainer.onmousedown = borderStretch
            bottomLeftStretchContainer.onmousedown = borderStretch
        }
    }
}
const handleMousedown = (className: String) => {
    switch (className) {
        case 'right': rightStretchContainer.onmousedown = borderStretch; break;
        case 'top': topStretchContainer.onmousedown = borderStretch; break;
        case 'bottom': bottomStretchContainer.onmousedown = borderStretch; break;
        case 'left': leftStretchContainer.onmousedown = borderStretch; break;
        case 'top-right': topRightStretchContainer.onmousedown = borderStretch; break;
        case 'top-left': topLeftStretchContainer.onmousedown = borderStretch; break;
        case 'bottom-right': bottomRightStretchContainer.onmousedown = borderStretch; break;
        case 'bottom-left': bottomLeftStretchContainer.onmousedown = borderStretch; break;
    }
}


const borderStretch = (e: MouseEvent) => {
    tempClassName = (<Element>e.target).className
    const modalContainer: HTMLElement = getNode(MODAL)
    const headerContainer: HTMLElement = getNode(HEADER)
    const confirmButtonContainer: HTMLElement = getNode(CONFIRM_BUTTON)

    let tempStretchX: number = e.clientX;
    let tempStretchY: number = e.clientY;

    let tempWidth: number = modalContainer.getBoundingClientRect().width;
    let tempHeight: number = modalContainer.getBoundingClientRect().height;

    let tempDomRight: number = window.innerWidth - modalContainer.getBoundingClientRect().right;
    let tempDomTop: number = modalContainer.getBoundingClientRect().top;
    let tempDomBottom: number = window.innerHeight - modalContainer.getBoundingClientRect().bottom;

    let isReachTop: boolean = false;
    let isReachBottom: boolean = false;
    let isReachRight: boolean = false;
    let isReachLeft: boolean = false;

    document.onmousemove = (e: MouseEvent) => {
        headerContainer.style.userSelect = 'none';
        confirmButtonContainer.style.userSelect = 'none';
        let domWidth: number = modalContainer.getBoundingClientRect().width;
        let domHeight: number = modalContainer.getBoundingClientRect().height;

        let domRight: number = window.innerWidth - modalContainer.getBoundingClientRect().right;
        let domLeft: number = modalContainer.getBoundingClientRect().left;
        let domTop: number = modalContainer.getBoundingClientRect().top;
        let domBottom: number = window.innerHeight - modalContainer.getBoundingClientRect().bottom;
        let domMarginRight: number = parseFloat(modalContainer.style.marginRight);
        let domMarginBottom: number = parseFloat(modalContainer.style.marginBottom);

        stretchState.widthRange = domWidth - stretchState.firstDomWidth;
        stretchState.heightRange = domHeight - stretchState.firstDomHeight;

        if (e.clientX < domWidth && e.clientX > 0) {
            domWidth = e.clientX;
        }

        if (e.clientY < domHeight && e.clientY > 0) {
            domHeight = e.clientY;
        }

        const rightStretchFn = () => {
            //容器向右移动
            if (stretchState.tempMarginRight < 0 && e.clientX - tempStretchX < tempDomRight) {
                modalContainer.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
            } else if (stretchState.tempMarginRight > 0) {
                //容器向左移动
                if (domLeft > 0) {
                    modalContainer.style.width =
                        `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                } else if (domLeft <= 0 && !isReachLeft) {
                    //如果容器刚刚抵达左边
                    stretchState.stretchDistanceY = e.clientX;
                    if (!stretchState.firstStretchDistanceX) {
                        stretchState.firstStretchDistanceX = e.clientX;
                        stretchState.reachWidthRange = parseFloat(modalContainer.style.width) - tempWidth;
                    }
                    isReachLeft = true;
                    tempWidth = parseFloat(modalContainer.style.width);
                    stretchState.tempMarginRight = parseFloat(modalContainer.style.marginRight);
                }

                if (
                    isReachLeft &&
                    domMarginRight > 0 &&
                    e.clientX >= stretchState.firstStretchDistanceX - stretchState.reachWidthRange
                    && window.innerWidth > domWidth
                ) {
                    //如果抵达左边但margin还没有为0
                    stretchState.tempMoveX = e.clientX - stretchState.stretchDistanceY;
                    let marginRightChange: number = stretchState.tempMarginRight - stretchState.tempMoveX;
                    modalContainer.style.marginRight = `${marginRightChange}px`;
                    modalContainer.style.width = `${tempWidth + (stretchState.tempMoveX)}` + "px";
                }

                if (domMarginRight <= 0 || isNaN(domMarginRight)) {
                    modalContainer.style.width =
                        `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                    //如果说已经到达中心
                }
            } else if (domRight > 0 || isNaN(domMarginRight) || tempWidth > domWidth) {
                modalContainer.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
            }
        };
        const leftStretchFn = () => {
            //如果容器向左移动
            if (stretchState.tempMarginRight > 0) {
                modalContainer.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
            } else if (stretchState.tempMarginRight < 0) {
                //如果容器向右移动
                if (domRight > 0) {
                    modalContainer.style.width =
                        `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                } else if (domRight <= 0 && !isReachRight) {
                    if (!stretchState.firstStretchDistanceX) {
                        stretchState.firstStretchDistanceX = e.clientX;
                        stretchState.reachWidthRange = parseFloat(modalContainer.style.width) - tempWidth;
                    }
                    stretchState.stretchDistanceY = e.clientX;
                    isReachRight = true;
                    tempWidth = parseFloat(modalContainer.style.width);
                    stretchState.tempMarginRight = parseFloat(modalContainer.style.marginRight);
                }
                if (
                    isReachRight &&
                    domMarginRight < 0 &&
                    e.clientX <= stretchState.firstStretchDistanceX + stretchState.reachWidthRange
                    && window.innerWidth > domWidth
                ) {
                    stretchState.tempMoveX = e.clientX - stretchState.stretchDistanceY;
                    let marginRightChange: number = stretchState.tempMarginRight - stretchState.tempMoveX;
                    modalContainer.style.marginRight = `${marginRightChange}px`;
                    modalContainer.style.width =
                        `${tempWidth - (stretchState.tempMoveX)}` + "px";
                }
            }
            if (domMarginRight >= 0 || isNaN(domMarginRight)) {
                modalContainer.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
            }
        };

        const topStretchFn = () => {
            //如果向上移动
            if (stretchState.tempMarginBottom > 0 && e.clientY + tempStretchY - 5 > tempDomTop) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
            } else if (stretchState.tempMarginBottom < 0) {
                //如果向下移动
                if (domBottom > 0 && !isReachBottom) {
                    modalContainer.style.height =
                        `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                } else if (domBottom <= 0 && !isReachBottom) {
                    isReachBottom = true;
                    if (!stretchState.firstStretchDistanceY) {
                        stretchState.firstStretchDistanceY = e.clientY;
                        stretchState.reachHeightRange = parseFloat(modalContainer.style.height) - tempHeight;
                    }
                    stretchState.stretchDistanceY = e.clientY;
                    tempHeight = parseFloat(modalContainer.style.height);
                    stretchState.tempMarginBottom = parseFloat(modalContainer.style.marginBottom);
                }
                if (
                    isReachBottom &&
                    domMarginBottom < 0 &&
                    parseFloat(modalContainer.style.height) < window.innerHeight &&
                    e.clientY <= stretchState.firstStretchDistanceY + stretchState.reachHeightRange
                ) {
                    stretchState.tempMoveY = e.clientY - stretchState.stretchDistanceY;
                    let marginBottomChange: number = stretchState.tempMarginBottom - stretchState.tempMoveY;
                    modalContainer.style.marginBottom = `${marginBottomChange}px`;
                    modalContainer.style.height =
                        `${tempHeight - (e.clientY - stretchState.stretchDistanceY)}` + "px";
                    //记录一下e.clientY
                    stretchState.topStretchClientY = e.clientY;
                }
                //基本实现
                if (domMarginBottom == 0 && e.clientY <= stretchState.topStretchClientY) {
                    tempHeight = parseFloat(modalContainer.style.height);
                    stretchState.stretchDistanceY = e.clientY;
                }
            }
            //如果margin为0，位于中心
            if (
                (domMarginBottom == 0 && e.clientY > stretchState.topStretchClientY) ||
                isNaN(domMarginBottom)
            ) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - stretchState.stretchDistanceY) * 2}` + "px";
            }
            //如果没有移动
            if (!stretchState.tempMarginBottom) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
            }
        };

        const bottomStretchFn = () => {
            //向下移动
            if (stretchState.tempMarginBottom < 0 && e.clientY - tempStretchY < tempDomBottom) {
                modalContainer.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
            } else if (stretchState.tempMarginBottom > 0) {
                //向上移动
                if (domTop > 0 && !isReachTop) {
                    //还未到达顶部
                    modalContainer.style.height =
                        `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                } else if (
                    //刚刚抵达顶部
                    domTop <= 0 &&
                    !isReachTop
                ) {
                    isReachTop = true;
                    if (!stretchState.firstStretchDistanceY) {
                        stretchState.firstStretchDistanceY = e.clientY;
                        stretchState.reachHeightRange = parseFloat(modalContainer.style.height) - tempHeight;
                    }
                    stretchState.stretchDistanceY = e.clientY;
                    tempHeight = parseFloat(modalContainer.style.height);
                    stretchState.tempMarginBottom = parseFloat(modalContainer.style.marginBottom);
                }
                if (
                    isReachTop &&
                    domMarginBottom > 0 &&
                    parseFloat(modalContainer.style.height) < window.innerHeight &&
                    e.clientY >= stretchState.stretchDistanceY - stretchState.reachHeightRange
                ) {
                    stretchState.tempMoveY = e.clientY - stretchState.stretchDistanceY;
                    let marginBottomChange = stretchState.tempMarginBottom - stretchState.tempMoveY;
                    modalContainer.style.marginBottom = `${marginBottomChange}px`;
                    modalContainer.style.height =
                        `${tempHeight + (e.clientY - stretchState.stretchDistanceY)}` + "px";
                    stretchState.topStretchClientY = e.clientY;
                }
                if (domMarginBottom == 0 && e.clientY >= stretchState.topStretchClientY) {
                    tempHeight = parseFloat(modalContainer.style.height);
                    stretchState.stretchDistanceY = e.clientY;
                }
            }
            if (
                (domMarginBottom == 0 && e.clientY < stretchState.topStretchClientY) ||
                isNaN(domMarginBottom)
            ) {
                modalContainer.style.height =
                    `${tempHeight + (e.clientY - stretchState.stretchDistanceY) * 2}` + "px";
            }
            if (!stretchState.tempMarginBottom) {
                modalContainer.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
            }
        };
        if (domWidth < window.innerWidth) {
            if (tempClassName == "hello-right-stretch") {
                rightStretchFn();
            }
            if (tempClassName == "hello-left-stretch") {
                leftStretchFn();
            }
            stretchState.tempDomWidth = domWidth;
        }
        if (domHeight < window.innerHeight) {
            if (tempClassName == "hello-top-stretch") {
                topStretchFn();
            }
            if (tempClassName == "hello-bottom-stretch") {
                bottomStretchFn();
            }
            stretchState.tempDomHeight = domHeight;
        }
        console.log("tempClassName:", tempClassName)
        if (domHeight < window.innerHeight && domWidth < window.innerWidth) {
            if (tempClassName == "hello-top-left-stretch") {
                topStretchFn();
                leftStretchFn();
            }
            if (tempClassName == "hello-top-right-stretch") {
                topStretchFn();
                rightStretchFn();
            }
            if (tempClassName == "hello-bottom-left-stretch") {
                bottomStretchFn();
                leftStretchFn();
            }
            if (tempClassName == "hello-bottom-right-stretch") {
                bottomStretchFn();
                rightStretchFn();
            }
            stretchState.tempDomHeight = domHeight;
            stretchState.tempDomWidth = domWidth;
        }
    };
    document.onmouseup = (e) => {
        headerContainer.style.userSelect = 'auto';
        modalContainer.style.userSelect = 'auto';
        confirmButtonContainer.style.userSelect = 'auto';
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

export default triggerBorder