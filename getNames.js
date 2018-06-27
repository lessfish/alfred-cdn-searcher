const fs = require('fs')
const https = require('https')

module.exports = exports = function() {
  let isFileExists = fs.existsSync('./name.json')

  if (!isFileExists) {
    return new Promise(resolve => {
      getNames(resolve)
    })
  } else {
    return new Promise(resolve => {
      fs.stat('./name.json', (err, stats) => {
        // over one month, update the data
        if (+new Date - stats.ctimeMs > 30 * 24 * 60 * 60 * 1000) {
          getNames(resolve)
        } else {
          fs.readFile('./name.json', (err, res) => {
            resolve(JSON.parse(res))
          })  
        }
      }) 
    })
  }
}

function getNames(resolve) {
  const options = {
    host: 'api.bootcdn.cn',
    path: '/names.min.json',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
    }
  }

  https.get(options, res => {
    let content = ''

    res.on('data', chunk => {
      content += chunk
    }).on('end', () => {
      const jsonContent = JSON.parse(content)
      fs.writeFile('./name.json', content, () => {console.warn('saved!')})
      resolve(jsonContent)
    })
  })
}