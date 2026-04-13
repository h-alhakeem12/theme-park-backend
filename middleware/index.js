const validateTicket = (req, res, next) => {
  const { customerName, customerEmail, park, quantity, totalprice } = req.body

  if (!customerName || !customerEmail || !totalprice || !park || !quantity) {
    res.status(400).send({ error: "Missing information." })
  }
}
module.exports = { validateTicket }
