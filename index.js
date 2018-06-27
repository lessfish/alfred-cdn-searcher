const keyword = process.argv[2]
const fs = require('fs')
const getNames = require('./getNames.js')

;(async function() {
  const names = await getNames()
  const result = []

  for (let name of names) {
    if (name.includes(keyword)) {
      result.push({
        title: name, 
        // subtitle: name,
        arg: name // 按回车后，alfred 会把这个变量传递给下个步骤
      })
    }
  }

  console.log(JSON.stringify({
    items: result
  }))
})()