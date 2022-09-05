class helloDialog {
    constructor() {
        this.createElement();
        this.show(this.backdrop);
        this.bind(this.backdrop);

    }
    createElement = () => {
        const dialogHtml = `
        <div class="hello-dialog-backdrop">
        <div class="hello-dialog">
          <div class="right-stretch"></div>
          <div class="top-stretch"></div>
          <div class="bottom-stretch"></div>
          <div class="left-stretch"></div>
          <div class="top-right-stretch"></div>
          <div class="top-left-stretch"></div>
          <div class="bottom-right-stretch"></div>
          <div class="bottom-left-stretch"></div>
          <div class="hello-dialog-header">
            <p>这是标题</p>
            <div>
              <button
                class="hello-dialog-full-screen"
                @click="fullScreen()"
              ></button>
              <button class="hello-dialog-close"></button>
            </div>
          </div>
          <div class="hello-dialog-body">这是body</div>
          <div class="hello-dialog-bottom">
            <button class="hello-dialog-confirm">确认</button>
          </div>
        </div>
      </div>
        `
        var backdrop = document.createElement("div")
        backdrop.className = "hello-dialog-backdrop"
        backdrop.innerHTML = dialogHtml

        const helloDialogDom = backdrop.querySelector(".hello-dialog");
        const helloDialogHeaderDom = backdrop.querySelector(".hello-dialog-header")

        const rightStretchDom = backdrop.querySelector(".right-stretch");
        const topStretchDom = backdrop.querySelector(".top-stretch");
        const bottomStretchDom = backdrop.querySelector(".bottom-stretch");
        const leftStretchDom = backdrop.querySelector(".left-stretch");
        const topRightStretchDom = backdrop.querySelector(".top-right-stretch");
        const topLeftStretchDom = backdrop.querySelector(".top-left-stretch");
        const bottomRightStretchDom = backdrop.querySelector(".bottom-right-stretch");
        const bottomLeftStretchDom = backdrop.querySelector(".bottom-left-stretch");

        const headerDom = backdrop.querySelector(".hello-dialog-header");
        const bodyDom = backdrop.querySelector(".hello-dialog-body");
        const confirmDom = backdrop.querySelector(".hello-dialog-confirm");

        this.backdrop = backdrop
        this.helloDialogDom = helloDialogDom
        this.helloDialogHeaderDom = helloDialogHeaderDom

        this.headerDom = headerDom;
        this.bodyDom = bodyDom;
        this.confirmDom = confirmDom;

        this.rightStretchDom = rightStretchDom;
        this.topStretchDom = topStretchDom;
        this.bottomStretchDom = bottomStretchDom;
        this.leftStretchDom = leftStretchDom;
        this.topRightStretchDom = topRightStretchDom;
        this.topLeftStretchDom = topLeftStretchDom;
        this.bottomRightStretchDom = bottomRightStretchDom;
        this.bottomLeftStretchDom = bottomLeftStretchDom;


        let isFullScreen = false;

        let lastMarginRight = 0;
        let lastMarginBottom = 0;
        let firstDomLeft = 0;
        let firstDomTop = 0;
        let firstDomWidth = 0;
        let firstDomHeight = 0;

        let tempDomWidth = 0;
        let tempDomHeight = 0;

        let tempMarginRight = 0;
        let tempMarginBottom = 0;

        let tempMoveX = 0;
        let tempMoveY = 0;

        let stretchDistanceX = 0;
        let stretchDistanceY = 0;
        let firstStretchDistanceX = 0;
        let firstStretchDistanceY = 0;
        let reachHeightRange = 0;
        let reachWidthRange = 0;
        let heightRange = 0;
        let widthRange = 0;

        let topStretchClientY = 0;

        this.isFullScreen = isFullScreen

        this.lastMarginRight = lastMarginRight;
        this.lastMarginBottom = lastMarginBottom;
        this.firstDomLeft = firstDomLeft;
        this.firstDomTop = firstDomTop;
        this.firstDomWidth = firstDomWidth;
        this.firstDomHeight = firstDomHeight;

        this.reachHeightRange = reachHeightRange;
        this.reachWidthRange = reachWidthRange;

        this.tempDomHeight = tempDomHeight;
        this.tempDomWidth = tempDomWidth;

        this.tempMarginRight = tempMarginRight;
        this.tempMarginBottom = tempMarginBottom;

        this.tempMoveX = tempMoveX;
        this.tempMoveY = tempMoveY;

        this.stretchDistanceX = stretchDistanceX;
        this.stretchDistanceY = stretchDistanceY;
        this.firstStretchDistanceX = firstStretchDistanceX;
        this.firstStretchDistanceY = firstStretchDistanceY;
        this.heightRange = heightRange;
        this.widthRange = widthRange;

        this.topStretchClientY = topStretchClientY;

    }
    show = (backdrop) => {
        document.body.appendChild(backdrop)
    }
    close = (backdrop) => {
        setTimeout(() => {
            document.body.removeChild(backdrop);
        }, 300);
    }
    bind = (backdrop) => {
        const cancle = () => {
            this.close(
                backdrop
            );
        }
        const getFullScreen = () => {
            this.fullScreen(
                this.helloDialogDom, this.helloDialogHeaderDom, this.isFullScreen
            )
        }

        backdrop.getElementsByClassName("hello-dialog-close")[0].addEventListener("click", cancle);
        backdrop.getElementsByClassName("hello-dialog-confirm")[0].addEventListener("click", cancle);
        backdrop.getElementsByClassName("hello-dialog-full-screen")[0].addEventListener("click", getFullScreen);

        this.firstDomLeft = this.helloDialogDom.getBoundingClientRect().left;
        this.firstDomTop = this.helloDialogDom.getBoundingClientRect().top;
        this.firstDomWidth = this.helloDialogDom.getBoundingClientRect().width;
        this.firstDomHeight = this.helloDialogDom.getBoundingClientRect().height;

        this.helloDialogHeaderDom.onmousedown = this.dialogMove
        this.rightStretchDom.onmousedown = this.dialogStretch;
        this.topStretchDom.onmousedown = this.dialogStretch;
        this.bottomStretchDom.onmousedown = this.dialogStretch;
        this.leftStretchDom.onmousedown = this.dialogStretch;
        this.topRightStretchDom.onmousedown = this.dialogStretch;
        this.topLeftStretchDom.onmousedown = this.dialogStretch;
        this.bottomRightStretchDom.onmousedown = this.dialogStretch;
        this.bottomLeftStretchDom.onmousedown = this.dialogStretch;
    }
    fullScreen = (helloDialogDom, helloDialogHeaderDom, isFullScreen) => {
        console.log("isFullScreen:", isFullScreen)
        if (!isFullScreen) {
            this.helloDialogDom.style.margin = "0";
            this.helloDialogDom.style.width = "100vw";
            this.helloDialogDom.style.height = "100vh";
            this.helloDialogDom.style.position = "fixed";
            this.helloDialogDom.style.display = "flex";
            this.helloDialogDom.style.flexDirection = "column";
            this.helloDialogDom.style.justifyContent = "space-between";
            this.helloDialogHeaderDom.style.cursor = "default";
        } else {
            this.helloDialogDom.style.width = "auto";
            this.helloDialogDom.style.height = "auto";
            this.helloDialogHeaderDom.style.cursor = "move";
        }
        this.isFullScreen = !isFullScreen;
    };

    dialogMove = (e) => {
        let moveDistanceX = e.clientX;
        let moveDistanceY = e.clientY;

        if (isNaN(this.helloDialogDom.style.marginRight)) {
            this.lastMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
        }
        if (isNaN(this.helloDialogDom.style.marginBottom)) {
            this.lastMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);
        }
        //应该记录margin值

        document.onmousemove = (e) => {
            this.headerDom.style.userSelect = 'none';
            this.bodyDom.style.userSelect = 'none';
            this.confirmDom.style.userSelect = 'none';

            let x = e.clientX - moveDistanceX;
            let y = e.clientY - moveDistanceY;
            console.log("this.firstDomLeft:", this.firstDomLeft)

            if (-x + this.lastMarginRight / 2 > -this.firstDomLeft + this.widthRange / 2 && -x + this.lastMarginRight / 2 < this.firstDomLeft - this.widthRange / 2) {
                this.helloDialogDom.style.marginRight = `${-x * 2 + this.lastMarginRight}px`;
                this.tempMarginRight = -x * 2 + this.lastMarginRight;
            }

            if (-y + this.lastMarginBottom / 2 > -this.firstDomTop + this.heightRange / 2 && -y + this.lastMarginBottom / 2 < this.firstDomTop - this.heightRange / 2) {
                this.helloDialogDom.style.marginBottom = `${-y * 2 + this.lastMarginBottom}px`;
                this.tempMarginBottom = -y * 2 + this.lastMarginBottom;
            }
        };
        document.onmouseup = (e) => {
            this.firstStretchDistanceX = 0;
            this.firstStretchDistanceY = 0;
            this.headerDom.style.userSelect = 'auto';
            this.bodyDom.style.userSelect = 'auto';
            this.confirmDom.style.userSelect = 'auto';
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    dialogStretch = (e) => {
        let tempStretchX = e.clientX;
        let tempStretchY = e.clientY;

        let tempWidth = this.helloDialogDom.getBoundingClientRect().width;
        let tempHeight = this.helloDialogDom.getBoundingClientRect().height;

        let tempDomRight =
            window.innerWidth - this.helloDialogDom.getBoundingClientRect().right;
        let tempDomTop = this.helloDialogDom.getBoundingClientRect().top;
        let tempDomBottom =
            window.innerHeight - this.helloDialogDom.getBoundingClientRect().bottom;

        let tempClassName = e.srcElement.className;

        let isReachTop = false;
        let isReachBottom = false;
        let isReachRight = false;
        let isReachLeft = false;

        document.onmousemove = (e) => {
            this.headerDom.style.userSelect = 'none';
            this.bodyDom.style.userSelect = 'none';
            this.confirmDom.style.userSelect = 'none';
            let domWidth = this.helloDialogDom.getBoundingClientRect().width;
            let domHeight = this.helloDialogDom.getBoundingClientRect().height;

            let domRight =
                window.innerWidth - this.helloDialogDom.getBoundingClientRect().right;
            let domLeft = this.helloDialogDom.getBoundingClientRect().left;
            let domTop = this.helloDialogDom.getBoundingClientRect().top;
            let domBottom =
                window.innerHeight - this.helloDialogDom.getBoundingClientRect().bottom;
            let domMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
            let domMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);

            this.widthRange = domWidth - this.firstDomWidth;
            this.heightRange = domHeight - this.firstDomHeight;

            if (e.clientX < domWidth && e.clientX > 0) {
                domWidth = e.clientX;
            }

            if (e.clientY < domHeight && e.clientY > 0) {
                domHeight = e.clientY;
            }

            const rightStretchFn = () => {
                //容器向右移动
                if (this.tempMarginRight < 0 && e.clientX - tempStretchX < tempDomRight) {
                    this.helloDialogDom.style.width =
                        `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                } else if (this.tempMarginRight > 0) {
                    //容器向左移动
                    if (domLeft > 0) {
                        this.helloDialogDom.style.width =
                            `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                    } else if (domLeft <= 0 && !isReachLeft) {
                        //如果容器刚刚抵达左边
                        this.stretchDistanceY = e.clientX;
                        if (!this.firstStretchDistanceX) {
                            this.firstStretchDistanceX = e.clientX;
                            this.reachWidthRange = parseFloat(this.helloDialogDom.style.width) - tempWidth;
                        }
                        isReachLeft = true;
                        tempWidth = parseFloat(this.helloDialogDom.style.width);
                        this.tempMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
                    }

                    if (
                        isReachLeft &&
                        domMarginRight > 0 &&
                        e.clientX >= this.firstStretchDistanceX - this.reachWidthRange
                        && window.innerWidth > domWidth
                    ) {
                        //如果抵达左边但margin还没有为0
                        this.tempMoveX = e.clientX - this.stretchDistanceY;
                        let marginRightChange = this.tempMarginRight - this.tempMoveX;
                        this.helloDialogDom.style.marginRight = `${marginRightChange}px`;
                        this.helloDialogDom.style.width = `${tempWidth + (this.tempMoveX)}` + "px";
                    }

                    if (domMarginRight <= 0 || isNaN(domMarginRight)) {
                        this.helloDialogDom.style.width =
                            `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                        //如果说已经到达中心
                    }
                } else if (domRight > 0 || isNaN(domMarginRight) || tempWidth > domWidth) {
                    this.helloDialogDom.style.width =
                        `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                }
            };
            const leftStretchFn = () => {
                //如果容器向左移动
                if (this.tempMarginRight > 0) {
                    this.helloDialogDom.style.width =
                        `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                } else if (this.tempMarginRight < 0) {
                    //如果容器向右移动
                    if (domRight > 0) {
                        this.helloDialogDom.style.width =
                            `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                    } else if (domRight <= 0 && !isReachRight) {
                        if (!this.firstStretchDistanceX) {
                            this.firstStretchDistanceX = e.clientX;
                            this.reachWidthRange = parseFloat(this.helloDialogDom.style.width) - tempWidth;
                        }
                        this.stretchDistanceY = e.clientX;
                        isReachRight = true;
                        tempWidth = parseFloat(this.helloDialogDom.style.width);
                        this.tempMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
                    }
                    if (
                        isReachRight &&
                        domMarginRight < 0 &&
                        e.clientX <= this.firstStretchDistanceX + this.reachWidthRange
                        && window.innerWidth > domWidth
                    ) {
                        this.tempMoveX = e.clientX - this.stretchDistanceY;
                        let marginRightChange = this.tempMarginRight - this.tempMoveX;
                        this.helloDialogDom.style.marginRight = `${marginRightChange}px`;
                        this.helloDialogDom.style.width =
                            `${tempWidth - (this.tempMoveX)}` + "px";
                    }
                }
                if (domMarginRight >= 0 || isNaN(domMarginRight)) {
                    this.helloDialogDom.style.width =
                        `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                }
            };

            const topStretchFn = () => {
                //如果向上移动
                if (this.tempMarginBottom > 0 && e.clientY + tempStretchY - 5 > tempDomTop) {
                    this.helloDialogDom.style.height =
                        `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                } else if (this.tempMarginBottom < 0) {
                    //如果向下移动
                    if (domBottom > 0 && !isReachBottom) {
                        this.helloDialogDom.style.height =
                            `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                    } else if (domBottom <= 0 && !isReachBottom) {
                        isReachBottom = true;
                        if (!this.firstStretchDistanceY) {
                            this.firstStretchDistanceY = e.clientY;
                            this.reachHeightRange = parseFloat(this.helloDialogDom.style.height) - tempHeight;
                        }
                        this.stretchDistanceY = e.clientY;
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.tempMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);
                    }
                    if (
                        isReachBottom &&
                        domMarginBottom < 0 &&
                        parseFloat(this.helloDialogDom.style.height) < window.innerHeight &&
                        e.clientY <= this.firstStretchDistanceY + this.reachHeightRange
                    ) {
                        this.tempMoveY = e.clientY - this.stretchDistanceY;
                        let marginBottomChange = this.tempMarginBottom - this.tempMoveY;
                        this.helloDialogDom.style.marginBottom = `${marginBottomChange}px`;
                        this.helloDialogDom.style.height =
                            `${tempHeight - (e.clientY - this.stretchDistanceY)}` + "px";
                        //记录一下e.clientY
                        this.topStretchClientY = e.clientY;
                    }
                    //基本实现
                    if (domMarginBottom == 0 && e.clientY <= this.topStretchClientY) {
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.stretchDistanceY = e.clientY;
                    }
                }
                //如果margin为0，位于中心
                if (
                    (domMarginBottom == 0 && e.clientY > this.topStretchClientY) ||
                    isNaN(domMarginBottom)
                ) {
                    this.helloDialogDom.style.height =
                        `${tempHeight - (e.clientY - this.stretchDistanceY) * 2}` + "px";
                }
                //如果没有移动
                if (!this.tempMarginBottom) {
                    this.helloDialogDom.style.height =
                        `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                }
            };

            const bottomStretchFn = () => {
                //向下移动
                if (this.tempMarginBottom < 0 && e.clientY - tempStretchY < tempDomBottom) {
                    this.helloDialogDom.style.height =
                        `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                } else if (this.tempMarginBottom > 0) {
                    //向上移动
                    if (domTop > 0 && !isReachTop) {
                        //还未到达顶部
                        this.helloDialogDom.style.height =
                            `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                    } else if (
                        //刚刚抵达顶部
                        domTop <= 0 &&
                        !isReachTop
                    ) {
                        isReachTop = true;
                        if (!this.firstStretchDistanceY) {
                            this.firstStretchDistanceY = e.clientY;
                            this.reachHeightRange = parseFloat(this.helloDialogDom.style.height) - tempHeight;
                        }
                        this.stretchDistanceY = e.clientY;
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.tempMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);
                    }
                    if (
                        isReachTop &&
                        domMarginBottom > 0 &&
                        parseFloat(this.helloDialogDom.style.height) < window.innerHeight &&
                        e.clientY >= this.stretchDistanceY - this.reachHeightRange
                    ) {
                        this.tempMoveY = e.clientY - this.stretchDistanceY;
                        let marginBottomChange = this.tempMarginBottom - this.tempMoveY;
                        this.helloDialogDom.style.marginBottom = `${marginBottomChange}px`;
                        this.helloDialogDom.style.height =
                            `${tempHeight + (e.clientY - this.stretchDistanceY)}` + "px";
                        this.topStretchClientY = e.clientY;
                    }
                    if (domMarginBottom == 0 && e.clientY >= this.topStretchClientY) {
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.stretchDistanceY = e.clientY;
                    }
                }
                if (
                    (domMarginBottom == 0 && e.clientY < this.topStretchClientY) ||
                    isNaN(domMarginBottom)
                ) {
                    this.helloDialogDom.style.height =
                        `${tempHeight + (e.clientY - this.stretchDistanceY) * 2}` + "px";
                }
                if (!this.tempMarginBottom) {
                    this.helloDialogDom.style.height =
                        `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                }
            };
            if (domWidth < window.innerWidth) {
                if (tempClassName == "right-stretch") {
                    rightStretchFn();
                }
                if (tempClassName == "left-stretch") {
                    leftStretchFn();
                }
                this.tempDomWidth = domWidth;
            }
            if (domHeight < window.innerHeight) {
                if (tempClassName == "top-stretch") {
                    topStretchFn();
                }
                if (tempClassName == "bottom-stretch") {
                    bottomStretchFn();
                }
                this.tempDomHeight = domHeight;
            }
            if (domHeight < window.innerHeight && domWidth < window.innerWidth) {
                if (tempClassName == "top-left-stretch") {
                    topStretchFn();
                    leftStretchFn();
                }
                if (tempClassName == "top-right-stretch") {
                    topStretchFn();
                    rightStretchFn();
                }
                if (tempClassName == "bottom-left-stretch") {
                    bottomStretchFn();
                    leftStretchFn();
                }
                if (tempClassName == "bottom-right-stretch") {
                    bottomStretchFn();
                    rightStretchFn();
                }
                this.tempDomHeight = domHeight;
                this.tempDomWidth = domWidth;
            }
        };
        document.onmouseup = (e) => {
            this.headerDom.style.userSelect = 'auto';
            this.bodyDom.style.userSelect = 'auto';
            this.confirmDom.style.userSelect = 'auto';
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

export default helloDialog