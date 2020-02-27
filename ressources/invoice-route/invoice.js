const router = require("express").Router()
const db = require("./invoice-model")
const restricted = require("../../middlewares/restricted")


// gets all invoices 

router.get("/", restricted, async (req, res) => {
  try {
    const invoices = await db.getInvoices()
    res.status(200).json(invoices)
  } catch ({ message }) {
    console.log(message)
    res.status(500).json(err.message)
  }
})





module.exports = router