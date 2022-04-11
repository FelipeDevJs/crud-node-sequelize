const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')

app.use(cors())

// const Test = require('./test')
// Test()

require('./database/index')

app.use(express.json())
app.use(router)

app.listen(5555, console.log('rodando na porta 5555'))