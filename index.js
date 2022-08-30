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
}

export default helloDialog