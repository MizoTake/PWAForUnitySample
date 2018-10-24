<template>
  <unity src="static/unityBuild/Build/unityBuild.json" width="1000" height="600" unityLoader="static/unityBuild/Build/UnityLoader.js"></unity>  
</template>
 
<script>
import Unity from 'vue-unity-webgl'
import Vue from 'vue'

export default {
  //   data: function () {
  //     return {
  //       gameWidth: window.innerWidth,
  //       gameHeight: window.innerHeight
  //     }
  //   },
  //   methods: {
  //     handleResize: function () {
  //       this.gameWidth = window.innerWidth
  //       this.gameHeight = window.innerHeight
  //     }
  //   },
  //   ready: function () {
  //     window.addEventListener('resize', this.handleResize)
  //   },
  //   beforeDestroy: function () {
  //     window.removeEventListener('resize', this.handleResize)
  //   }
}

Vue.component('unity', Unity)
</script>