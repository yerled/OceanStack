<template>
  <Tableview :tableData="portData"></Tableview>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Setmeal',
  data () {
    return {
      portData: [],
    }
  },
  mounted () {

  },
  computed: {
    ...mapGetters({
      portData: 'ports',
    }),
  },
}
</script>
