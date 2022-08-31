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
          <div class="hello-dialog-header">
            <p>这是标题</p>
            <div>
              <button
                class="hello-dialog-full-screen"
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

        let isFullScreen = false

        this.backdrop = backdrop
        this.helloDialogDom = helloDialogDom
        this.helloDialogHeaderDom = helloDialogHeaderDom
        this.isFullScreen = isFullScreen

        let distanceX = 0;
        let distanceY = 0;
        let firstDistanceX = 0;
        let firstDistanceY = 0;
        let tempRight = 0;
        let tempLeft = 0;
        let tempTop = 0;
        let tempBottom = 0;

        this.distanceX = distanceX;
        this.distanceY = distanceY;
        this.firstDistanceX = firstDistanceX;
        this.firstDistanceY = firstDistanceY;
        this.tempRight = tempRight;
        this.tempLeft = tempLeft;
        this.tempTop = tempTop;
        this.tempBottom = tempBottom;

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
        backdrop.getElementsByClassName("hello-dialog-header")[0].onmousedown = this.dialogMove
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
}

export default helloDialog