var router = require('express').Router()

var taskController = require ('../controllers/taskController.js')

router.get('/search', function(req, res) {
  taskController.search(req, res)
})
router.get('/', function(req, res) {
  taskController.list(req, res)
})
router.get('/:id', function(req, res) {
  taskController.show(req, res)
})
router.post('/', function(req, res) {
  taskController.create(req, res)
})
router.put('/:id', function(req, res) {
  taskController.update(req, res)
})
router.delete('/:id', function(req, res) {
  taskController.remove(req, res)
})
module.exports = router