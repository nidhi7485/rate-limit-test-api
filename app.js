const express = require('express')
const app = express()
const rateLimitMiddleware = require('./middleware/rateLimit')
const collectionController = require('./controller/collectionController')

app.use(rateLimitMiddleware)
app.get('/', (req, res) => {
  res.send(`<a href="/api/getData">Get Data</a>`)
})
app.use('/api/getData', collectionController)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
