const Jokes = require('../models/jokes.model');

const getAllJokes = (req, res) => {
    console.log(res)
    Jokes.find({})
        .then(allJokes => res.json({allJokes: allJokes}))
        .catch((err) => res.json({message: "Unable to locate jokes", error:err}))
}


const getOneJoke = (req, res) => {
    Jokes.find({_id: req.params.id})
    .then((newJoke) => res.json({joke: newJoke}))
    .catch((err) => res.json({message: "Unable to locate joke", error:err}))
}

const createJoke = (req, res) => {
    Jokes.create(req.body)
    .then((newJoke) => res.json({joke: newJoke}))
    .catch((err) => res.json({message: "Unable to add joke", error:err}))
}

const updateJoke = (req, res) => {
    Jokes.findByIdAndUpdate({_id: req.params.id }, req.body, { new: true })
        .then(updateJoke => res.json({joke: updateJoke}))
        .catch(err => res.json({message: "Unable to update", error:err}))
}

const deleteJoke = (req, res) => {
    Jokes.findByIdAndDelete({_id: req.params.id })
        .then(result => req.json({result: result}))
        .catch(err => res.json({message: "Error: Couldn't bring myself to do it. Joke NOT deleted..", error:err}))
}

module.exports = {getAllJokes, getOneJoke, createJoke, deleteJoke,updateJoke};
