const tasks = require("./../controllers/tasks");

module.exports = (app) => {
    app.get("/tasks/", tasks.index),
    app.post("/tasks/new", tasks.new),
    app.delete("/tasks/remove/:id", tasks.remove),
    app.put("/tasks/:id", tasks.update),
    app.get("/tasks/:id", tasks.show)

}