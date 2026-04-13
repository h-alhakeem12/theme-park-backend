const express = require("express")
const router = express.Router()

const ticketController = require ('../controllers/ticketController.js')

router.post("/", ticketController. addTickets)

router.delete("/:id", ticketController. deleteTickets)

module.exports = router
