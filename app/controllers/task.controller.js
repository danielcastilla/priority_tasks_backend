const db = require("../models");
const Task = db.Task;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    if(!req.body.titulo){
        res.status(400).send({message: "El campo TITULO no tiene contenido"})
    }

    if(!req.body.titulo){
        res.status(400).send({message: "El campo AUTOR no tiene contenido"})
    }

    if(!req.body.titulo){
        res.status(400).send({message: "El campo DESCRIPCION no tiene contenido"})
    }

    //Create task
    const task  = new Task({
        titulo: req.body.titulo,
        decripcion: req.body.descripcion,
        autor: req.body.autor,
        creado: new Date(),
        actualizado: new Date(),
        seguir: false,
        tags: req.body.tags
    });

    task
        .save(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear la tarea."
            })
        })

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};