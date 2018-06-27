const https = require('https')
const keyword = process.argv[2]

const options = {
  host: 'api.bootcdn.cn',
  path: `/libraries/${keyword}.min.json`,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
  }
}

https.get(options, res => {
  let content = ''
  const result = []

  res.on('data', chunk => {
    content += chunk
  }).on('end', () => {
    const jsonContent = JSON.parse(content)
    const {version, files} = jsonContent.assets[0]
    const urlPrefix = `cdn.bootcss.com/${keyword}/${version}/`

    for (let file of files) {
      const name = `${urlPrefix}${file}`
      
      result.push({
        title: name, 
        arg: name // 按回车后，alfred 会把这个变量传递给下个步骤
      })
    }

    console.log(JSON.stringify({
      items: result
    }))
  })
})