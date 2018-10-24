<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <unity src="static/unityBuild/Build/unityBuild.json"
        v-bind="{ width: gameWidth, height: gameHeight }"
       unityLoader="static/unityBuild/Build/UnityLoader.js"></unity>  
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'

export default {
  name: 'app',
  data: function () {
    return {
      gameWidth: window.innerWidth * 0.95,
      gameHeight: window.innerHeight * 0.8
    }
  },
  methods: {
    handleResize: function () {
      this.gameWidth = window.innerWidth
      this.gameHeight = window.innerHeight
    }
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: Unity
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
