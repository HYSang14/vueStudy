// 创建mysql连接池
const mysql = require('mysql')
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vuetest',
    connectionLimit: 10
})
module.exports  = pool;