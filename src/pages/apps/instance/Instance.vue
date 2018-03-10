<template>
  <div>overview</div>
</template>

<style lang="less" scoped>

</style>

<script>
export default {
  name: 'overview',
  data () {
    return {
      data: {},
    }
  },
  methods: {

  },
  components: {

  },
  computed: {

  },
  mounted: function () {
    console.log('mounted')
  },
  beforeDestory: function () {
    alert('beforDestroy')
  },
}
</script>
