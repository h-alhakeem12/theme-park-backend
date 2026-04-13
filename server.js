require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const morgan = require("morgan")

const ticketRouter = require("./routes/ticketRoutes")

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

// Database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err))

// Routes
app.use("/tickets", ticketRouter)

app.get("/", (req, res) => {
  res.json({ message: " Park API is running..." })
})

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
