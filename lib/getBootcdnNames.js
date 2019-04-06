const fs = require("fs");
const get = require("../util/get")
const path = require('path')
const filePath = path.join(__dirname, '../name.json')

/**
 * 获取 bootcdn 的 lib names
 * 优先使用本地缓存文件
 */
module.exports = function () {
  let isFileExists = fs.existsSync(filePath)
  let stats = isFileExists ? fs.statSync('./../name.json') : {}
  
  // 如果第一次使用（即 name.json 还未生成 || name.json 一个月没更新了）
  if (!isFileExists || +new Date() - stats.ctimeMs > 30 * 24 * 60 * 60 * 1000) {
    return new Promise(async resolve => {
      let url = "https://api.bootcdn.cn/names.min.json"
      let content = await get(url)

      fs.writeFile(filePath, JSON.stringify(content), () => {
        console.warn("saved!")
      })

      resolve(content)
    })
  } else {
    return new Promise(resolve => {
      resolve(require(filePath))
    })
  }
}
