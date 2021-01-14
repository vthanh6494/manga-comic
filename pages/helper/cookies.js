import JsCookies from 'js-cookie'

class cookies {
  constructor() {
    if (typeof window !== 'undefined') {
      let host = window.location.hostname
      if (host.indexOf('local') === -1) {
        host = `.${host.split('.').slice(-2).join('.')}`
      }
      this.OPTS = {
        domain: host,
      }
    }
  }

  set(key, value) {
    if (typeof window !== 'undefined') {
      return JsCookies.set(key, value, this.OPTS)
    }
    return ''
  }

  get(key) {
    return JsCookies.get(key)
  }

  remove(key) {
    return JsCookies.remove(key, this.OPTS)
  }
}
const Cookies = new cookies()

export default Cookies
