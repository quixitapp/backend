const db = require("../../data/dbConfig")

module.exports = {
  getInvoices,
  getInvoiceById
}

function getInvoices(){
    return db('invoices')
}

function getInvoiceById(invoiceId){
    return db('invoices').where({id:invoiceId})
}

