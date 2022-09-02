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

        let isFullScreen = false

        this.backdrop = backdrop
        this.helloDialogDom = helloDialogDom
        this.helloDialogHeaderDom = helloDialogHeaderDom
        this.isFullScreen = isFullScreen

        this.rightStretchDom = rightStretchDom;
        this.topStretchDom = topStretchDom;
        this.bottomStretchDom = bottomStretchDom;
        this.leftStretchDom = leftStretchDom;
        this.topRightStretchDom = topRightStretchDom;
        this.topLeftStretchDom = topLeftStretchDom;
        this.bottomRightStretchDom = bottomRightStretchDom;
        this.bottomLeftStretchDom = bottomLeftStretchDom;


        let moveDistanceX = 0;
        let moveDistanceY = 0;
        let firstDistanceX = 0;
        let firstDistanceY = 0;
        let tempRight = 0;
        let tempLeft = 0;
        let tempTop = 0;
        let tempBottom = 0;

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
        let heightRange = 0;
        let widthRange = 0;

        let topStretchClientY = 0;

        this.moveDistanceX = moveDistanceX;
        this.moveDistanceY = moveDistanceY;
        this.firstDistanceX = firstDistanceX;
        this.firstDistanceY = firstDistanceY;
        this.tempRight = tempRight;
        this.tempLeft = tempLeft;
        this.tempTop = tempTop;
        this.tempBottom = tempBottom;

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
            helloDialogDom.style.margin = "0";
            helloDialogDom.style.width = "100vw";
            helloDialogDom.style.height = "100vh";
            helloDialogDom.style.position = "fixed";
            helloDialogDom.style.display = "flex";
            helloDialogDom.style.flexDirection = "column";
            helloDialogDom.style.justifyContent = "space-between";
            helloDialogHeaderDom.style.cursor = "default";
        } else {
            helloDialogDom.style.width = "auto";
            helloDialogDom.style.height = "auto";
            helloDialogHeaderDom.style.cursor = "move";
        }
        this.isFullScreen = !isFullScreen;
    };

    dialogMove = (e) => {
        if (this.firstDistanceX == 0 && this.firstDistanceY == 0) {
            this.firstDistanceX = e.clientX;
            this.firstDistanceY = e.clientY;
            this.moveDistanceX = e.clientX;
            this.moveDistanceY = e.clientY;
        } else {
            this.moveDistanceX = this.firstDistanceX;
            this.moveDistanceY = this.firstDistanceY;
        }

        document.onmousemove = (e) => {
            let x = e.clientX - this.moveDistanceX;
            let y = e.clientY - this.moveDistanceY;
            let maxDomLeft = this.helloDialogDom.getBoundingClientRect().left;
            let maxDomTop = this.helloDialogDom.getBoundingClientRect().top;
            let maxDomRight =
                window.innerWidth - this.helloDialogDom.getBoundingClientRect().right;
            let maxDomBottom =
                window.innerHeight - this.helloDialogDom.getBoundingClientRect().bottom;
            let maxRight = x + maxDomRight;
            let maxLeft = x - maxDomLeft;
            let maxTop = y - maxDomTop;
            let maxBottom = y + maxDomBottom;
            if (x < this.tempRight) {
                maxRight = this.tempRight;
            }
            if (x > this.tempLeft) {
                maxLeft = this.tempLeft;
            }
            if (y > this.tempTop) {
                maxTop = this.tempTop;
            }
            if (y < this.tempBottom) {
                maxBottom = this.tempBottom;
            }

            if (x > maxLeft && x < maxRight) {
                this.helloDialogDom.style.marginRight = `${-x * 2}px`;
                this.tempRight = x;
                this.tempLeft = x;
                this.tempMarginRight = -x * 2;
            }

            if (y > maxTop && y < maxBottom) {
                this.helloDialogDom.style.marginBottom = `${-y * 2}px`;
                this.tempTop = y;
                this.tempBottom = y;
                this.tempMarginBottom = -y * 2;
            }
        };
        document.onmouseup = (e) => {
            this.firstStretchDistanceX = 0;
            this.firstStretchDistanceY = 0;
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
        let tempDomLeft = this.helloDialogDom.getBoundingClientRect().left;

        let tempClassName = e.srcElement.className;

        let isReachTop = false;
        let isReachBottom = false;
        let isReachRight = false;
        let isReachLeft = false;

        document.onmousemove = (e) => {
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
                        this.stretchDistanceX = e.clientX;
                        if (!this.firstStretchDistanceX) {
                            this.firstStretchDistanceX = e.clientX;
                            this.widthRange = parseFloat(this.helloDialogDom.style.width) - tempWidth;
                        }
                        isReachLeft = true;
                        tempWidth = parseFloat(this.helloDialogDom.style.width);
                        this.tempMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
                    }
                    if (
                        isReachLeft &&
                        domMarginRight > 0 &&
                        e.clientX >= this.firstStretchDistanceX - this.widthRange
                    ) {
                        //如果抵达左边但margin还没有为0
                        this.tempMoveX = e.clientX - this.stretchDistanceX;
                        let marginRightChange = this.tempMarginRight - this.tempMoveX;
                        this.helloDialogDom.style.marginRight = `${marginRightChange}px`;
                        this.helloDialogDom.style.width =
                            `${tempWidth + (e.clientX + this.tempMoveX)}` + "px";
                    }
                    if (domMarginRight <= 0 || isNaN(domMarginRight)) {
                        this.helloDialogDom.style.width =
                            `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                        //如果说已经到达中心
                    }
                } else if (domRight > 0 || isNaN(domMarginRight)) {
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
                            this.widthRange = parseFloat(this.helloDialogDom.style.width) - tempWidth;
                        }
                        this.stretchDistanceX = e.clientX;
                        isReachRight = true;
                        tempWidth = parseFloat(this.helloDialogDom.style.width);
                        this.tempMarginRight = parseFloat(this.helloDialogDom.style.marginRight);
                    }
                    if (
                        isReachRight &&
                        domMarginRight < 0 &&
                        e.clientX <= this.firstStretchDistanceX + this.widthRange
                    ) {
                        this.tempMoveX = e.clientX - this.stretchDistanceX;
                        let marginRightChange = this.tempMarginRight - this.tempMoveX;
                        this.helloDialogDom.style.marginRight = `${marginRightChange}px`;
                        this.helloDialogDom.style.width =
                            `${tempWidth - (e.clientX - this.stretchDistanceX)}` + "px";
                    }
                }
                if (domMarginRight == 0 || isNaN(domMarginRight)) {
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
                            this.heightRange = parseFloat(this.helloDialogDom.style.height) - tempHeight;
                        }
                        this.stretchDistanceY = e.clientY;
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.tempMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);
                    }
                    if (
                        isReachBottom &&
                        domMarginBottom < 0 &&
                        parseFloat(this.helloDialogDom.style.height) < window.innerHeight &&
                        e.clientY <= this.firstStretchDistanceY + this.heightRange
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
                        // && domMarginBottom <= this.tempMarginBottom
                    ) {
                        isReachTop = true;
                        if (!this.firstStretchDistanceY) {
                            this.firstStretchDistanceY = e.clientY;
                            this.heightRange = parseFloat(this.helloDialogDom.style.height) - tempHeight;
                        }
                        this.stretchDistanceY = e.clientY;
                        tempHeight = parseFloat(this.helloDialogDom.style.height);
                        this.tempMarginBottom = parseFloat(this.helloDialogDom.style.marginBottom);
                    }
                    if (
                        isReachTop &&
                        domMarginBottom > 0 &&
                        parseFloat(this.helloDialogDom.style.height) < window.innerHeight &&
                        e.clientY >= this.stretchDistanceY - this.heightRange
                    ) {
                        console.log("e.clientY:", e.clientY);
                        console.log("this.stretchDistanceY:", this.stretchDistanceY);
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
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

export default helloDialog