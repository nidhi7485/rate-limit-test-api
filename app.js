const express = require('express')
const app = express()
const logger = require('morgan')
const fs = require('fs')
const rateLimitMiddleware = require('./middleware/rateLimit')
const collectionController = require('./controller/collectionController')

app.use(
  logger('combined', {
    stream: fs.createWriteStream('./access.log', { flags: 'a' }),
  })
)
app.use(logger('dev'))

app.use(rateLimitMiddleware)
app.get('/', (req, res) => {
  res.send(`<a href="/api/getData">Get Data</a>`)
})
app.use('/api/getData', collectionController)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
