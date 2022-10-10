import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import globalState from '../../store'

const { CONFIRM_BUTTON, HEADER, MODAL, RIGHT_STRETCH, TOP_STRETCH, BOTTOM_STRETCH, LEFT_STRETCH, TOP_RIGHT_STRETCH, TOP_LEFT_STRETCH, BOTTOM_RIGHT_STRETCH, BOTTOM_LEFT_STRETCH } = CLASS_NAMES;

let tempClassName: string = "";

export const triggerBorder = (): void => {
    const rightStretchContainer: HTMLElement = getNode(RIGHT_STRETCH)
    const topStretchContainer: HTMLElement = getNode(TOP_STRETCH)
    const bottomStretchContainer: HTMLElement = getNode(BOTTOM_STRETCH)
    const leftStretchContainer: HTMLElement = getNode(LEFT_STRETCH)
    const topRightStretchContainer: HTMLElement = getNode(TOP_RIGHT_STRETCH)
    const topLeftStretchContainer: HTMLElement = getNode(TOP_LEFT_STRETCH)
    const bottomRightStretchContainer: HTMLElement = getNode(BOTTOM_RIGHT_STRETCH)
    const bottomLeftStretchContainer: HTMLElement = getNode(BOTTOM_LEFT_STRETCH)

    rightStretchContainer.onmousedown = borderStretch
    topStretchContainer.onmousedown = borderStretch
    bottomStretchContainer.onmousedown = borderStretch
    leftStretchContainer.onmousedown = borderStretch
    topRightStretchContainer.onmousedown = borderStretch
    topLeftStretchContainer.onmousedown = borderStretch
    bottomRightStretchContainer.onmousedown = borderStretch
    bottomLeftStretchContainer.onmousedown = borderStretch

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

        globalState.widthRange = domWidth - globalState.firstDomWidth;
        globalState.heightRange = domHeight - globalState.firstDomHeight;

        if (e.clientX < domWidth && e.clientX > 0) {
            domWidth = e.clientX;
        }

        if (e.clientY < domHeight && e.clientY > 0) {
            domHeight = e.clientY;
        }

        const rightStretchFn = () => {
            //容器向右移动
            if (globalState.tempMarginRight < 0 && e.clientX - tempStretchX < tempDomRight) {
                modalContainer.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
            } else if (globalState.tempMarginRight > 0) {
                //容器向左移动
                if (domLeft > 0) {
                    modalContainer.style.width =
                        `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                } else if (domLeft <= 0 && !isReachLeft) {
                    //如果容器刚刚抵达左边
                    globalState.stretchDistanceY = e.clientX;
                    if (!globalState.firstStretchDistanceX) {
                        globalState.firstStretchDistanceX = e.clientX;
                        globalState.reachWidthRange = parseFloat(modalContainer.style.width) - tempWidth;
                    }
                    isReachLeft = true;
                    tempWidth = parseFloat(modalContainer.style.width);
                    globalState.tempMarginRight = parseFloat(modalContainer.style.marginRight);
                }

                if (
                    isReachLeft &&
                    domMarginRight > 0 &&
                    e.clientX >= globalState.firstStretchDistanceX - globalState.reachWidthRange
                    && window.innerWidth > domWidth
                ) {
                    //如果抵达左边但margin还没有为0
                    globalState.tempMoveX = e.clientX - globalState.stretchDistanceY;
                    let marginRightChange: number = globalState.tempMarginRight - globalState.tempMoveX;
                    modalContainer.style.marginRight = `${marginRightChange}px`;
                    modalContainer.style.width = `${tempWidth + (globalState.tempMoveX)}` + "px";
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
            if (globalState.tempMarginRight > 0) {
                modalContainer.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
            } else if (globalState.tempMarginRight < 0) {
                //如果容器向右移动
                if (domRight > 0) {
                    modalContainer.style.width =
                        `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                } else if (domRight <= 0 && !isReachRight) {
                    if (!globalState.firstStretchDistanceX) {
                        globalState.firstStretchDistanceX = e.clientX;
                        globalState.reachWidthRange = parseFloat(modalContainer.style.width) - tempWidth;
                    }
                    globalState.stretchDistanceY = e.clientX;
                    isReachRight = true;
                    tempWidth = parseFloat(modalContainer.style.width);
                    globalState.tempMarginRight = parseFloat(modalContainer.style.marginRight);
                }
                if (
                    isReachRight &&
                    domMarginRight < 0 &&
                    e.clientX <= globalState.firstStretchDistanceX + globalState.reachWidthRange
                    && window.innerWidth > domWidth
                ) {
                    globalState.tempMoveX = e.clientX - globalState.stretchDistanceY;
                    let marginRightChange: number = globalState.tempMarginRight - globalState.tempMoveX;
                    modalContainer.style.marginRight = `${marginRightChange}px`;
                    modalContainer.style.width =
                        `${tempWidth - (globalState.tempMoveX)}` + "px";
                }
            }
            if (domMarginRight >= 0 || isNaN(domMarginRight)) {
                modalContainer.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
            }
        };

        const topStretchFn = () => {
            //如果向上移动
            if (globalState.tempMarginBottom > 0 && e.clientY + tempStretchY - 5 > tempDomTop) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
            } else if (globalState.tempMarginBottom < 0) {
                //如果向下移动
                if (domBottom > 0 && !isReachBottom) {
                    modalContainer.style.height =
                        `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                } else if (domBottom <= 0 && !isReachBottom) {
                    isReachBottom = true;
                    if (!globalState.firstStretchDistanceY) {
                        globalState.firstStretchDistanceY = e.clientY;
                        globalState.reachHeightRange = parseFloat(modalContainer.style.height) - tempHeight;
                    }
                    globalState.stretchDistanceY = e.clientY;
                    tempHeight = parseFloat(modalContainer.style.height);
                    globalState.tempMarginBottom = parseFloat(modalContainer.style.marginBottom);
                }
                if (
                    isReachBottom &&
                    domMarginBottom < 0 &&
                    parseFloat(modalContainer.style.height) < window.innerHeight &&
                    e.clientY <= globalState.firstStretchDistanceY + globalState.reachHeightRange
                ) {
                    globalState.tempMoveY = e.clientY - globalState.stretchDistanceY;
                    let marginBottomChange: number = globalState.tempMarginBottom - globalState.tempMoveY;
                    modalContainer.style.marginBottom = `${marginBottomChange}px`;
                    modalContainer.style.height =
                        `${tempHeight - (e.clientY - globalState.stretchDistanceY)}` + "px";
                    //记录一下e.clientY
                    globalState.topStretchClientY = e.clientY;
                }
                //基本实现
                if (domMarginBottom == 0 && e.clientY <= globalState.topStretchClientY) {
                    tempHeight = parseFloat(modalContainer.style.height);
                    globalState.stretchDistanceY = e.clientY;
                }
            }
            //如果margin为0，位于中心
            if (
                (domMarginBottom == 0 && e.clientY > globalState.topStretchClientY) ||
                isNaN(domMarginBottom)
            ) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - globalState.stretchDistanceY) * 2}` + "px";
            }
            //如果没有移动
            if (!globalState.tempMarginBottom) {
                modalContainer.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
            }
        };

        const bottomStretchFn = () => {
            //向下移动
            if (globalState.tempMarginBottom < 0 && e.clientY - tempStretchY < tempDomBottom) {
                modalContainer.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
            } else if (globalState.tempMarginBottom > 0) {
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
                    if (!globalState.firstStretchDistanceY) {
                        globalState.firstStretchDistanceY = e.clientY;
                        globalState.reachHeightRange = parseFloat(modalContainer.style.height) - tempHeight;
                    }
                    globalState.stretchDistanceY = e.clientY;
                    tempHeight = parseFloat(modalContainer.style.height);
                    globalState.tempMarginBottom = parseFloat(modalContainer.style.marginBottom);
                }
                if (
                    isReachTop &&
                    domMarginBottom > 0 &&
                    parseFloat(modalContainer.style.height) < window.innerHeight &&
                    e.clientY >= globalState.stretchDistanceY - globalState.reachHeightRange
                ) {
                    globalState.tempMoveY = e.clientY - globalState.stretchDistanceY;
                    let marginBottomChange = globalState.tempMarginBottom - globalState.tempMoveY;
                    modalContainer.style.marginBottom = `${marginBottomChange}px`;
                    modalContainer.style.height =
                        `${tempHeight + (e.clientY - globalState.stretchDistanceY)}` + "px";
                    globalState.topStretchClientY = e.clientY;
                }
                if (domMarginBottom == 0 && e.clientY >= globalState.topStretchClientY) {
                    tempHeight = parseFloat(modalContainer.style.height);
                    globalState.stretchDistanceY = e.clientY;
                }
            }
            if (
                (domMarginBottom == 0 && e.clientY < globalState.topStretchClientY) ||
                isNaN(domMarginBottom)
            ) {
                modalContainer.style.height =
                    `${tempHeight + (e.clientY - globalState.stretchDistanceY) * 2}` + "px";
            }
            if (!globalState.tempMarginBottom) {
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
            globalState.tempDomWidth = domWidth;
        }
        if (domHeight < window.innerHeight) {
            if (tempClassName == "hello-top-stretch") {
                topStretchFn();
            }
            if (tempClassName == "hello-bottom-stretch") {
                bottomStretchFn();
            }
            globalState.tempDomHeight = domHeight;
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
            globalState.tempDomHeight = domHeight;
            globalState.tempDomWidth = domWidth;
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