require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const morgan = require("morgan")

const parkRouter = require("./routes/parkRouter")
const ticketRouter = require("./routes/ticketRouter")

const PORT = process.env.PORT || 3000

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const db = require("./db")

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

// Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err))

// Routes
app.use("/park", parkRouter)
app.use("/tickets", ticketRouter)

app.get("/", (req, res) => {
  res.json({ message: " Park API is running..." })
})

// Server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
