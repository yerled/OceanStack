import axios from 'axios'

if (typeof window.axios === 'undefined') {
  window.axios = axios
  // for dev
  window.login = function (email = 'yerled91', password = 'lv1m#4B') {
    axios({
      url: '/login',
      method: 'post',
      'content-type': 'application/x-www-form-urlencoded',
      data: `email=${email}&password=${password}`,
    })
  }
  window.testAjax = function (url = '/os/network/v2.0/ports') {
    axios.get(url)
  }
}
