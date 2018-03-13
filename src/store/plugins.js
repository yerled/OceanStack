const plugins = []

plugins.push(function updateStoreWithSocket (store) {
  store.subscribe((mutation, state) => {
    console.log(mutation.type)
  })
})

export default plugins
