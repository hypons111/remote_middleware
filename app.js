const express = require('express')
const app = express()
const port = 3000

function next() {
  let now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
}



app.use(function (req, res, next) {
  let reqTime = new Date();
  console.log(`${reqTime.getFullYear()}-${reqTime.getMonth()}-${reqTime.getDate()} ${reqTime.getHours()}:${reqTime.getMinutes()}:${reqTime.getSeconds()}:${reqTime.getMilliseconds()}`)

  console.log(`${req.method} from localhost${req.path}`)

  let resTime = new Date();
  console.log(`${resTime.getFullYear()}-${resTime.getMonth()}-${resTime.getDate()} ${resTime.getHours()}:${resTime.getMinutes()}:${resTime.getSeconds()}:${resTime.getMilliseconds()}`)

  console.log('total time:', resTime.getMilliseconds() - reqTime.getMilliseconds(), 'ms')

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
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


