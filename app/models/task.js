module.exports = mongoose => {

    const TaskSchema = mongoose.model(
        "task",
        mongoose.Schema({
            titular: String,
            descripcion: String,
            tags:[String],
            creado:{type:Date, default:Date.now},
            actualizado:{type:Date, default:Date.now},
            seguir:Boolean,
            autor:String
    })
    );
    return TaskSchema;
}