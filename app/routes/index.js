var router = require('express').Router()
var tasks = require('./tasks')

  router.use('/tasks', tasks)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router