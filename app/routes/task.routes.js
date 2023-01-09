module.exports = app => {
    const task = require("../controllers/task.controller.js")

    var router = require("express").Router();

    //Create a new task
    router.post("/", task.create)

}