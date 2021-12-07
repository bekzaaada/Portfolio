<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        const layoutName = this.$route.meta.layout || 'DefaultLayout';
        return () => import(`@/layouts/${layoutName}.vue`)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 100vh;
  }
  body {
    font-size: 35px;
    background-color: #000000;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #nav {
    padding: 30px;
    a {
      text-decoration: none;
      padding: 30px;
      margin-right: 25px;
      font-size: 1.8rem;
      font-weight: bold;
      color: rgb(128, 128, 255);
      &.router-link-exact-active {
        color: #E5E5E5;
      }
    }
  }
</style>