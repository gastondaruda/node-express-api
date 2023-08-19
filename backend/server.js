const express = require("express")
const PORT = process.env.PORT || 5000
const connectDB = require("./config/connectDB")
const dotenv = require("dotenv").config()
const Movie = require("./models/movieModel")
const movieRoutes = require("./routes/movieRoute")
const cors = require("cors")


const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use("/api/movies",movieRoutes)

//Routes
app.get("/", (req,res) => {
    res.send("Home page")
})


const startServer = async() => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`App is listening in port ${PORT}...`)
        })
    } catch(err){
        console.log(err)
    }
}

startServer()