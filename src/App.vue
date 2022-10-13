<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { SET_BLOCK_TRACKING } from '@vue/compiler-core';
import HelloWorld from './components/HelloWorld.vue'
import Hello from './helloDialog'

setTimeout(function () {
  Hello({
    content: {
      // background: {
      //   color: '123',
      //   picUrl: '123'
      // },
      // touch: true,
      // layout: 'left',
      type: 'input'
    },
    border: {
      enable: false,
    }
    // backdrop: {
    //   closeModal: false,
    //   background: {
    //     picUrl: 'https://img0.baidu.com/it/u=2913413499,2575831010&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=256',
    //     picSize: '10%'
    //   }
    // }
  })
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
