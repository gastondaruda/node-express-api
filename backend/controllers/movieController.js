const Movie = require("../models/movieModel")

//create movie
const createMovie = async (req,res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(200).json(movie)
    }catch(err){
        res.status(500).json({error: error.message})
    }
}
//get all movies
const getAllMovies = async ( req,res) => {
    try{
        const movies = await Movie.find()
        res.status(200).json(movies)
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}
//get single movie
const getMovie = async (req,res) => {
    try{
        const {id} = req.params;
        const movie = await Movie.findById(id)
        if(!movie){
            return res.status(404).json(`No movie with id:${id}`)
        }
        res.status(200).json(movie)
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}
//Delete Movie
const deleteMovie = async(req,res) => {
    try{
        const {id} = req.params;
        const movie = await Movie.findByIdAndDelete(id)
        if(!movie){
            return res.status(404).json(`No movie with id:${id}`)
        }
        res.status(200).send("Movie deleted")
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}

//update movie
const updateMovie = async (req,res) => {
    try{
        const { id } = req.params
        const movie = await Movie.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new:true, runValidators: true},
        )
        if(!movie){
            return res.status(404).json(`No movie with id:${id}`)
        }
        res.status(200).json(movie)
    }catch(err){
        res.status(500).json({msg: err.message})
    }
}
module.exports = {
    createMovie,
    getAllMovies,
    getMovie,
    deleteMovie,
    updateMovie
}