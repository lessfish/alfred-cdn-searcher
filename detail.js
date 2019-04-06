const keyword = process.argv[2]
const fs = require('fs')
const cdnName = fs.readFileSync('./.cdnrc', 'utf-8')
const getDetailResult = require('./lib/getDetailResult')

;(async function() {
  let result = await getDetailResult(cdnName, keyword)

  console.log(JSON.stringify({
    items: result
  }))
})()