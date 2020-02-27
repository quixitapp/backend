const db = require("../../data/dbConfig")

module.exports = {
  getInvoices,
}

function getInvoices(){
    return db('invoices')
}


