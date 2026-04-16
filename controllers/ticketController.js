const Ticket = require("../models/Ticket")

const Park = require("../models/Park")

const addTickets = async (req, res) => {
  try {
    const park = await Park.findById(req.body.parkId)
    const totalPrice = park.price * req.body.quantity
    const newTicket = await Ticket.create({
      ...req.body,
      totalPrice,
    })
    res.status(201).json(newTicket)
  } catch (error) {
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
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  addTickets,
  deleteTickets,
}
