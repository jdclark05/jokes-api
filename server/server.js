const mongoose = require('mongoose');
require("./config/mongoose.config");
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);


const server = app.listen(port, () => console.log(`Listening on port ${port}`));