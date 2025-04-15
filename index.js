    // /backend/index.js
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde Railway' })
})

app.listen(process.env.PORT || 3001)

