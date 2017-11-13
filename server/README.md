## how to run server

### install
`cnpm i or npm i`

### start mongodb server
`mongod --dbpath ./server/mongodb --logpath ./server/mongodb/mongodb.log --logappend &`

### develop
`npm run dev`

### production
`npm start`

### test
`npm run test`


### 创建一条数据

/api/create

```javascript
{
    type [required]
    content [required]
    struct [optional]
}
```

### 更新某条数据

/api/update

```javascript
{
    content [optional]
    struct [optional]
}
```
### 获取某条

/api/fetch

```javascript
{
    id [optional]
}
```

###获取列表

/api/list

```javascript
{
    type [required]
    pageid [optional]
    pagesize [optional]
}
```
