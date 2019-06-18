const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { initialize } = require('express-openapi')
const v1WorldsService = require('./api-v1/services/worldsService')
const v1ApiDoc = require('./api-v1/api-doc')

const app = express()

app.use(cors())
app.use(bodyParser.json())

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {
    worldsService: v1WorldsService
  },
  paths: './api-v1/paths'
})

app.listen(3000)
