# CDNSearcher

为了方便在写 demo 的时候引入 CDN，遂做了这个简单的工具，目前支持 [bootcdn](https://www.bootcdn.cn/) | [cdnjs](https://cdnjs.com/)

感谢 [BootCDN API](http://www.bootcdn.cn/api/) | [CDNJS API](https://cdnjs.com/api)

## API

* `cdn + {query}` 搜索 cdn，`Enter` 或者单击复制，`CMD+Enter` 或者 `CMD+单击` 在浏览器打开
* `cdns` 选择 cdn 源（目前支持 bootcdn 和 cdnjs）
* `cdnc` 清除 bootcdn 缓存

> 注意：在进行 `cdn + {query}` 搜索前，请先用 `cdns` 添加cdn源，否则搜索不生效！

bootcdn [没提供搜索接口](https://www.bootcdn.cn/api/#faq)，默认从 [所有开源库名称列表](https://api.bootcdn.cn/names.min.json) 搜索库，该列表会缓存到本地，默认一个月更新一次，也可以用 `cdnc` 清除缓存（所有开源库名称列表应该是根据搜索频率排列的库）

cdnjs 走搜素接口
 
## 环境要求

* Alfred Powerpack
* Node version >= 8.0.0 (`/usr/local/bin/node`)
