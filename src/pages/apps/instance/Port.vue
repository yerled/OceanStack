<template>
  <TableView
      :tableData="tableData"
      :columns="columns"
      :buttons="buttons"
      >
  </TableView>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Port',
  data () {
    return {
      ...mapState({
        tableData: 'ports',
      }),
      tableData: [],
      buttons: [{
        type: 'primary',
        field: 'create_port',
        label: '创建虚拟网卡',
      }, {
        field: 'bind_instance',
        label: '绑定云主机',
      }, {
        field: 'unbind_instance',
        label: '解绑云主机',
      }],
      columns: [{
        field: 'ip',
        label: 'IP地址',
      }, {
        field: 'status',
        label: '状态',
      }],
      detail: {

      },
    }
  },
  mounted () {
    this.$store.dispatch('updatePorts')
  },
}
</script>
