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
    res.status(500).json(message)
  }
})

// <------------------------------------------------------------>

// Get specified invoice by id

router.get("/:id", restricted ,async (req, res) => {
    const id = req.params.id
    try {
      const invoice = await db.getInvoiceById(id)
      res.status(200).json(invoice)
    } catch ({ message }) {
      console.log(message)
      res.status(500).json(message)
    }
  })




module.exports = router