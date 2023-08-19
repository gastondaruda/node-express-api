const express = require("express")
const router = express.Router()
const {createMovie, getAllMovies,getMovie, deleteMovie, updateMovie} = require("../controllers/movieController")

router.route("/").get(getAllMovies).post(createMovie)
router.route("/:id").get(getMovie).delete(deleteMovie).patch(updateMovie)


module.exports = router

