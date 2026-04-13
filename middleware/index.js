const validateTicket = (req, res, next) => {
  const { customerName, customerEmail, park, quantity, price } = req.body

  if (!customerName || !customerEmail || !price || !park || !quantity) {
    res.status(400).send({ error: "Missing information." })
  }
}
module.exports = { validateTicket }
