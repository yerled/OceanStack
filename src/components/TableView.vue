<template>
  <div>
    <div class="buttonGroup">
      <el-button plain v-for="button of buttons" :type="getButtonType(button)" :key="button.field">
        {{button.label}}
      </el-button>
    </div>
    <div class="table">
      <el-table :data="tdata">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column v-for="column of columns" :key="column.field"
            :prop="column.field" :label="column.label"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../styles/variable.less';

.table {
  margin-top: 20px;
}
</style>

<script>
import {mapState} from 'vuex'

export default {
  name: 'TableView',
  data () {
    return {

    }
  },
  props: {
    buttons: {
      type: Array,
    },
    columns: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
    },
  },
  computed: {
    ...mapState('Port', {
      tdata: 'ports',
    }),
  },
  methods: {
    getButtonType (button) {
      return button.type === 'primary' ? 'primary' : 'info'
    },
  },
}
</script>
