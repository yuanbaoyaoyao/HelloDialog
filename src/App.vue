<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { SET_BLOCK_TRACKING } from '@vue/compiler-core';
import HelloWorld from './components/HelloWorld.vue'
import Hello from './helloDialog'

setTimeout(function () {
  Hello({
    bottom: {
      button: [{
        text: '123', hover: {
          color: 'blue',
          backgroundColor: 'yellow',
        }
      }, {
        text: '是的', hover: {
          color: 'green'
        }
      }],
    },
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
    alert("yes")
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
