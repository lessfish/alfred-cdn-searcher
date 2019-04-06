# TODO

* [ ] 目前 cdnjs 需要使用两个接口，效率比较低，可以用 <https://api.cdnjs.com/libraries?search=[query]&fields=assets> 接口，只需要一个就能请求到两步骤需要的数据，将第一步请求得到的 assets 传给第二步使用