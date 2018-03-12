<template>
  <span :class="classArr">{{money | money(fixed)}}</span>
</template>

<style lang="less" scoped>
@import '../styles/variable.less';

.money {
  color: @color_price;
  &.balance {
    color: @color_balance;
    font-size: @fontsize_title;
  }
  &.main {
    font-size: @fontsize_title;
  }
  &.zero {
    color: @color_zero;
  }
}
</style>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    fixed: {
      type: Number,
      default: 0,
    },
    money: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    classArr: function () {
      let arr = ['money']
      if (Number.parseFloat(this.$props.money) === 0) {
        arr.push('zero')
      }
      return arr
    },
  },
}
</script>
