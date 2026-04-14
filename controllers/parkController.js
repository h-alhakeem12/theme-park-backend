const Park = require("../models/Park")
const getParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    res.send(parks)
  } catch (error) {
    res.status(500).send({ msg: "Error getting park", error })
  }
}

const getParkById = async (req, res) => {
  try {
    const park = await Park.findById(req.params.id)

    res.send(park)
  } catch (error) {
    res.status(500).send({ msg: "Error getting park ID", error })
  }
}

module.exports = {
  getParks,
  getParkById,
}
