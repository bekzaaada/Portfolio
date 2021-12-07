<template>
  <section class="layout">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "DefaultLayout"
  }
</script>

<style lang="scss" scoped>
  .layout {
    background-color: white;
  }
</style>