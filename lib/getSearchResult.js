const getBootcdnNames = require('./getBootcdnNames')
const get = require('./../util/get')
const path = require('path')

/**
 * 根据关键字查询库名
 * @param {String} cdnName
 * @param {String} keyword
 */
function getSearchResult(cdnName, keyword) {
  const result = []

  return new Promise(async resolve => {
    if (cdnName === 'bootcdn') {
      // 获取 lib names
      const names = await getBootcdnNames()

      for (let name of names) {
        if (name.includes(keyword)) {
          result.push({
            title: name, 
            icon: {
              path: path.join(__dirname, './../bootcdn.png'),
            },
            // subtitle: name,
            arg: name // 按回车后，alfred 会把这个变量传递给下个步骤
          })
        }
      }
    } else if (cdnName === 'cdnjs') {
      let content = await get(`https://api.cdnjs.com/libraries?search=${keyword}`)
      // let content = await get(`https://api.cdnjs.com/libraries?search=${keyword}&fields=assets`)

      for (let item of content.results) {
        result.push({
          title: item.name, 
          icon: {
            path: path.join(__dirname, './../cdnjs.png'),
          },
          // subtitle: name,
          arg: item.name // 按回车后，alfred 会把这个变量传递给下个步骤
        })
      }
    }

    resolve(result)
  })
}

module.exports = getSearchResult
