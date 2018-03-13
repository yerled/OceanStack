<template>
  <svg aria-hidden="true">
    <use :xlink:href="icontype"></use>
  </svg>
</template>

<style lang="less" scoped>
  svg {
    width: 1.4em; height: 1.4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    padding-right: 8px;
  }
</style>

<script>
export default {
  data () {
    return {}
  },
  props: ['icon'],
  computed: {
    icontype () {
      return `#icon-${this.icon}`
    },
  },
}
</script>
