<template>
  <section class="layout">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "SkillsLayout"
  }
</script>

<style lang="scss" scoped>
  .layout {
    background-color: rgb(179, 179, 255);
  }
</style>