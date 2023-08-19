const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name: {type: String, require: true},
    plataform: {type: String, require: true},
    completed: {type: Boolean, require: true, default: false}
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie