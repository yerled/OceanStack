export default {
  state: {
    ports: [{ip: 0, status: 'failure'}],
  },
  mutations: {
    setPorts (state, ports) {
      console.log(ports)
      state.ports.push({ip: 1, status: 'ok'})
      // state.ports = [...ports]
    },
  },
  actions: {
    async updatePorts ({commit}) {
      let res = await window.axios.get('/os/network/v2.0/ports')
      if (Array.isArray(res.data.ports)) {
        commit('setPorts', res.data.ports)
      } else {
        console.error('setmeal actions getPorts')
      }
    },
  },
}
