const db = require("../../data/dbConfig")

module.exports = {
  getInvoices,
  getInvoiceById,
  getInvoicesByProjectId,
  createInvoice
}

function getInvoices(){
    return db('invoices')
}

function getInvoiceById(invoiceId){
    return db('invoices').where({id : invoiceId})
}

function getInvoicesByProjectId(projectId){
    return db('invoices').where({project_id : projectId})
}

function createInvoice(newInvoice){
    return db('invoices').insert(newInvoice)
}
