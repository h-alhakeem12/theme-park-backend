const mongoose = require("mongoose")
const parkSchema = require("./Park")
const ticketSchema = require("./Ticket")

const Park = mongoose.model("park", parkSchema)
const Ticket = mongoose.model("ticket", ticketSchema)

module.exports = {
  Park,
  Ticket,
}
