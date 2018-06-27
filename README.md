# CDNSearcher

为了方便在写 demo 的时候引入 CDN，同时因为目前存在的类似工具不符合个人要求，遂做了这个简单的工具

感谢 [BootCDN API](http://www.bootcdn.cn/api/)

## 使用说明

![](https://ws2.sinaimg.cn/large/006tNc79gy1fsq25zgt7ug30gi0gme49.gif)

如 gif 所示，搜索的关键字为 `cdn`，`Enter` 或者单击复制，`CMD+Enter` 或者 `CMD+单击` 在浏览器打开

开源库集合的 json 文件本地缓存（更新周期一个月），如需删除重新下载（比如加入了新的开源库，但是本地缓存的文件还没更新），请使用 `cdnc` 命令

具体的开源库信息的搜索暂时是即时搜索，没做缓存处理（因为速度看起来还可以）

## 工作流

![](https://ws1.sinaimg.cn/large/006tNc79gy1fsq26ky9muj30p00cljx4.jpg)

## 环境要求

- Alfred Powerpack
- Node version >= 8.0.0 (`/usr/local/bin/node`)