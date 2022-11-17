<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Hello from './helloDialog'

setTimeout(function () {
  // Hello(
  //   'Good job!',
  //   'You clicked the button!',
  //   'success'
  // )
  Hello({
    // icon: {
    //   iconName: 'warning',
    // },
    bottom: {
      button: [
        {
          text: '123',
          hover: {
            color: 'blue',
            backgroundColor: 'yellow',
          }
        },
        {
          text: '是的', hover: {
            color: 'green'
          }
        },
        {
          text: '你好', hover: {
            color: 'green'
          }
        }
      ],
    },
    modal: {
      background: {
        picUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202102%2F26%2F20210226073347_50f94.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669429609&t=169d2895e4f900ed439fffa867d678d5",
        // color: '#52f9e0',
        picRepeat: 'repeat-y',
        picSize: '30px',
        picPosition: 'right'
      },
      position: 'right',
      // timer: 3000,
      loading: true,
      appendToBody: true,
    },
    header: {
      background: {
        color: 'blue'
      },
      touch: false,
      enableFullScreen: true,
      // enableCloseModal: true,
      titleLayout: 'center',
      enableMove: true,
      buttonHover: {
        fullScreenButton: {
          color: 'blue',
          backgroundColor: 'yellow',
        },
        closeModalButton: {
          color: 'blue',
          backgroundColor: 'yellow',
        },
      }
    }
    // content: {
    //   text: '123123',
    //   background: {
    //     picUrl: 'http://t15.baidu.com/it/u=4291421941,3170596813&fm=224&app=112&f=JPEG?w=500&h=500',
    //     color: "blue",
    //     picRepeat: 'repeat-x',
    //     picSize: '30',
    //     picPosition: 'left',
    //   },
    //   touch: true,
    //   layout: 'left',
    //   type: 'text',
    //   loading: true,
    // }
  }).then((res => {
    alert(res)
  }))
}, 500)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <p>123</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
