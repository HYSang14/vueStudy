const express = require('express')
const router = express.Router()
const pool = require('../pool.js')

// 登录数据
router.get('/login', (req, res) => {
    let obj =req.query;
    let sql = 'SELECT * FROM single where name=? and passwrod=?';
    pool.query(sql, [obj.name, obj.upwd], (err,result) => {
        if (err) console.log(err)
        res.send(result)
    })
})
module.exports = router