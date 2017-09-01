const Koa = require('koa')
const app = new Koa()
// Server端（服务器、端口号等构成）node.js 
// client端（浏览器等）dom ajax js

// 向引入的模块传参 在require()后(参数)
require('./config')(app) 
// const config = require('./config')
// config(app)
// 路由
require('./routes')(app)
app.listen(3000)