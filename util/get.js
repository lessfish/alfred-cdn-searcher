const https = require('https')
const URL = require('url').URL

/**
 * 根据 url 获取链接内容
 * @param {String} url 
 */
function get(url) {
  const myUrl = new URL(url)

  const options = {
    host: myUrl.host,
    path: myUrl.pathname + myUrl.search,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
    }
  }

  return new Promise(resolve => {
    https.get(options, res => {
      let content = ''

      res.on('data', chunk => {
        content += chunk
      }).on('end', () => {
        resolve(JSON.parse(content))
      })
    })
  })
}

module.exports = get
