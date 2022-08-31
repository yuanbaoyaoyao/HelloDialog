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


        let distanceX = 0;
        let distanceY = 0;
        let firstDistanceX = 0;
        let firstDistanceY = 0;
        let tempRight = 0;
        let tempLeft = 0;
        let tempTop = 0;
        let tempBottom = 0;

        let tempDomWidth = 0;
        let tempDomHeight = 0;

        this.distanceX = distanceX;
        this.distanceY = distanceY;
        this.firstDistanceX = firstDistanceX;
        this.firstDistanceY = firstDistanceY;
        this.tempRight = tempRight;
        this.tempLeft = tempLeft;
        this.tempTop = tempTop;
        this.tempBottom = tempBottom;

        this.tempDomHeight = tempDomHeight;
        this.tempDomWidth = tempDomWidth;

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
            helloDialogDom.style.width = "98.5vw";
            helloDialogDom.style.height = "96.8vh";
            helloDialogDom.style.position = "fixed";
            helloDialogDom.style.display = "flex";
            helloDialogDom.style.flexDirection = "column";
            helloDialogDom.style.justifyContent = "space-between";
            helloDialogHeaderDom.style.cursor = "default";
        } else {
            helloDialogDom.style.width = "auto";
            helloDialogDom.style.height = "auto";
            helloDialogDom.style.position = "static";
            helloDialogDom.style.display = "inline-block";
            helloDialogDom.style.verticalAlign = "middle";
            helloDialogHeaderDom.style.cursor = "move";
        }
        this.isFullScreen = !isFullScreen;
    };

    dialogMove = (e) => {
        console.log("eeeeeeeee:", e)
        if (this.firstDistanceX == 0 && this.firstDistanceY == 0) {
            this.firstDistanceX = e.clientX;
            this.firstDistanceY = e.clientY;
            this.distanceX = e.clientX;
            this.distanceY = e.clientY;
        } else {
            this.distanceX = this.firstDistanceX;
            this.distanceY = this.firstDistanceY;
        }

        document.onmousemove = (e) => {
            let x = e.clientX - this.distanceX;
            let y = e.clientY - this.distanceY;
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
            }

            if (y > maxTop && y < maxBottom) {
                this.helloDialogDom.style.marginBottom = `${-y * 2}px`;
                this.tempTop = y;
                this.tempBottom = y;
            }
        };
        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
    dialogStretch = (e) => {
        let tempStretchX = e.clientX;
        let tempStretchY = e.clientY;
        let tempWidth = this.helloDialogDom.getBoundingClientRect().width;
        let tempHeight = this.helloDialogDom.getBoundingClientRect().height;

        let tempClassName = e.srcElement.className;

        document.onmousemove = (e) => {
            let domWidth = this.helloDialogDom.getBoundingClientRect().width;
            let domHeight = this.helloDialogDom.getBoundingClientRect().height;
            if (e.clientX < domWidth && e.clientX > 0) {
                domWidth = e.clientX;
            }
            if (e.clientY < domHeight && e.clientY > 0) {
                domHeight = e.clientY;
            }

            if (tempClassName == "right-stretch" && domWidth < window.innerWidth) {
                this.helloDialogDom.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                this.tempDomWidth = domWidth;
            }
            if (tempClassName == "top-stretch" && domHeight < window.innerHeight) {
                this.helloDialogDom.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                this.tempDomHeight = domHeight;
            }
            if (tempClassName == "bottom-stretch" && domHeight < window.innerHeight) {
                this.helloDialogDom.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                this.tempDomHeight = domHeight;
            }
            if (tempClassName == "left-stretch" && domWidth < window.innerWidth) {
                this.helloDialogDom.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                this.tempDomWidth = domWidth;
            }
            if (tempClassName == "top-left-stretch") {
                this.helloDialogDom.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                this.helloDialogDom.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                this.tempDomHeight = domHeight;
                this.tempDomWidth = domWidth;
            }
            if (tempClassName == "top-right-stretch") {
                this.helloDialogDom.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                this.helloDialogDom.style.height =
                    `${tempHeight - (e.clientY - tempStretchY) * 2}` + "px";
                this.tempDomHeight = domHeight;
                this.tempDomWidth = domWidth;
            }
            if (tempClassName == "bottom-left-stretch") {
                this.helloDialogDom.style.width =
                    `${tempWidth - (e.clientX - tempStretchX) * 2}` + "px";
                this.helloDialogDom.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
                this.tempDomHeight = domHeight;
                this.tempDomWidth = domWidth;
            }
            if (tempClassName == "bottom-right-stretch") {
                this.helloDialogDom.style.width =
                    `${tempWidth + (e.clientX - tempStretchX) * 2}` + "px";
                this.helloDialogDom.style.height =
                    `${tempHeight + (e.clientY - tempStretchY) * 2}` + "px";
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