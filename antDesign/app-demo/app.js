// 使用express构造web服务器
const express = require('express')
const bodyParser = require('body-parser')
// 引入路由模块
const index = require('./routes/index')
// 引入cors，整体解决跨域问题
const cors = require('cors')
var app = express()

const server = app.listen(3000)

app.use(cors({
    origin:['http://localhost:8080','http://127.0.0.1:8080'],
    credentials:true
}));
// 使用bodyParser 中间件
app.use(bodyParser.urlencoded({extended: false}));
// 使用路由器来管理路由
app.use('/msg', index)
