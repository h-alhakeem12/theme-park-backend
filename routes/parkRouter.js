const router = require("express").Router()
const parkController = require("../controllers/parkController")

router.get("/", parkController.getParks)
router.get("/:id", parkController.getParkById)

module.exports = router
