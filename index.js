const keyword = process.argv[2]
const getSearchResult = require('./lib/getSearchResult')
const fs = require('fs')
const cdnName = fs.readFileSync('./.cdnrc', 'utf-8')

;(async function() {
  const result = await getSearchResult(cdnName, keyword)

  console.log(JSON.stringify({
    items: result
  }))
})()
