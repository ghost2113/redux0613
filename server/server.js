const express = require('express')
const bodyParser = require('body-parser')//可以解析post返回的json
const cookieParser = require('cookie-parser')//可以解析cookie数据

const userRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})


