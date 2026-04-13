const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema(
  {
     park: { type: mongoose.Schema.Types.ObjectId, ref: "Park", required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Ticket", ticketSchema)
