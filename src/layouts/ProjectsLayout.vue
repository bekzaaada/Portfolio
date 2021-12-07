<template>
  <section class="layout">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "ProjectsLayout"
  }
</script>

<style lang="scss" scoped>
  .layout {
    background-color: rgb(230, 230, 255);
  }
</style>