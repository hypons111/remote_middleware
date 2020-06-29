const express = require('express')
const app = express()
const port = 3000



app.use((req, res, next) => {
  let reqTime = new Date()

  res.on("finish", () => {
    statusCode = 400
    resTime = new Date()
    const mS = resTime.getMilliseconds() - reqTime.getMilliseconds()
    console.log(`${reqTime.getFullYear()}-${reqTime.getMonth()}-${reqTime.getDate()} ${reqTime.getHours()}:${reqTime.getMinutes()}:${reqTime.getSeconds()} | ${req.method} from ${req.path} | total time: ${mS} ms`)
  })
  next()
})


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todos')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


