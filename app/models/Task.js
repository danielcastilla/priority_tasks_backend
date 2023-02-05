var mongoose = require('mongoose')
var Schema = mongoose.Schema

var taskSchema = new Schema({
            titular: String,
            descripcion: String,
            tags:[String],
            creado:{type:Date, default:Date.now},
            actualizado:{type:Date, default:Date.now},
            seguir:Boolean,
            autor:String
    })

var Task = mongoose.model('Task', taskSchema)

module.exports = Task