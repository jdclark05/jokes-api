const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/jokes", JokesController.getAllJokes);
    app.get("/jokes/:id", JokesController.getOneJoke);
    app.post("/jokes/", JokesController.createJoke);
    app.put("/jokes/:id", JokesController.updateJoke);
    app.delete("/jokes/:id", JokesController.deleteJoke);
}