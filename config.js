// node.js 模块化机制，最基本是commonJS
const bodyParser = require('koa-bodyparser')
// session会话 告诉服务器你是谁 服务器告诉你你当前以什么方式存在会话session中
const session = require('koa-session-minimal')
module.exports = app => {
    // bodyParser解析表单post提交
    // 声明中间件 启用
    app.use(bodyParser())
    app.use(session({
        // 服务器端是session 客户端是cookie
        // 客服端是浏览器 靠cookie带字符串传递
        key: 'session-id',
        cookie: {
            // cookie有域名限制 只要主域名 子域名 端口有任一不同就错
            domain: 'localhost',
            path: '/',
            maxAge: 1000*60*30,
            httpOnly: true, //仅用于http请求
            overwrite: false //不允许服务器/客户端重写 禁止被抹除
        }
    }))
}