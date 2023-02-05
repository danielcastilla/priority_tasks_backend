var Tasks = require('../models/Task.js')
module.exports = {
// https://docs.mongodb.com/v3.0/reference/operator/query/text/
search: function (req, res) {
  var q = req.query.q
  Tasks.find({ $text: { $search: q } }, function(err, tasks) {
    if(err) {
      return res.status(500).json({
        message: 'Error en la búsqueda'
      })
    }
    return res.json(tasks)
  })
},
list: function(req, res) {
  Tasks.find(function(err, tasks){
    if(err) {
      return res.status(500).json({
        message: 'Error obteniendo la cerveza'
      })
    }
    return res.json(tasks)
  })
},
show: function(req, res) {
  var id = req.params.id
  Tasks.findOne({_id: id}, function(err, task){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al obtener la task'
      })
    }
    if(!task) {
      return res.status(404).json( {
        message: 'No tenemos esta task'
      })
    }
    return res.json(task)
  })
},
create: function(req, res) {
  var task = new Tasks (req.body)
  task.save(function(err, task){
    if(err) {
      return res.status(500).json( {
        message: 'Error al guardar la task',
        error: err
      })
    }
    return res.status(201).json({
      message: 'saved',
      _id: task._id
    })
  })
},
update: function(req, res) {
  var id = req.params.id
  Tasks.findOne({_id: id}, function(err, task){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la task',
        error: err
      })
    }
    if(!task) {
      return res.status(404).json({
        message: 'No hemos encontrado la task'
      })
    }
    task.titulo = req.body.titulo
    task.descripción =  req.body.descripcion
    task.tags = req.body.tags
    task.creado = new Date()
    task.actualizado = new Date()
    task.seguir = false
    task.autor = req.body.autor
    task.save(function(err, task){
      if(err) {
        return res.status(500).json({
          message: 'Error al guardar la task'
        })
      }
      if(!task) {
        return res.status(404).json({
          message: 'No hemos encontrado la task'
        })
      }
      return res.json(task)
    })
  })
},
remove: function(req, res) {
  var id = req.params.id
  Tasks.findByIdAndRemove(id, function(err, task){
    if(err) {
      return res.json(500, {
        message: 'No hemos encontrado la task'
      })
    }
    return res.json(task)
  })
}
}