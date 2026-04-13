const Ticket = require("../models/Ticket")

const addTickets = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body)
    res.status(201).json(newTicket)
  } catch (error) {
    console.error("⚠️ error !", error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteTickets = async (req, res) => {
  try {
    const deleted = await Ticket.findByIdAndDelete(req.params.id)
    if (!deleted) {
      return res.status(404).json({ message: "Ticket not found" })
    }
    res.json({ message: "Deleted successfully" })
  } catch (error) {
    console.error("⚠️ error !", error.message)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  addTickets,
  deleteTickets
}
