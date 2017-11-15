## how to run server

### install
`cnpm i or npm i`

### start mongodb server
`mongod --dbpath ./mongodb --logpath ./mongodb/mongodb.log --logappend &`

### develop
`npm run dev`

### production
`npm start`

### test
`npm run test`

## API

### POST /api/create

创建数据

Request body:
 * type {String} - 数据类型
 * content {String} - 数据内容
 * struct {String} - 数据结构

Response:
 * errno {Number} - 自定义出错码
 * errmsg {String} - 错误信息
 * data {string} - 数据id


### PUT /api/update/:id

更新数据

Request body:
 * id {Number} - 数据id
 * contnet {String} - 数据内容
 * struct {String} - 数据结构

Response: 204 not content

### GET /api/fetch/:id

获取数据

Url params:
 * id {Number} - 数据id

Response type:
 * content {Data.content} - 数据内容

### GET /api/list

获取数据列表

Url params:
 * page {Number} - 请求的页数
 * pageSize {Number} - 页面大小
 * type {String} - 数据类型

Response type:
 * total {Number} - 数据总量
 * hasNext {Boolean} - 是否还有下一页
 * list {< Data >} - a list of Data instance

## Types

### Data
* id {Number} - 数据id
* type {String} - 数据类型
* content {String} - 数据内容
* struct {String} - 数据结构
