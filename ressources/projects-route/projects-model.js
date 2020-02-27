const db = require("../../data/dbConfig")

module.exports = {
  getProjects,
  getProjectById
}

function getProjects() {
  return db("projects")
}


function getProjectById(projectId) {
    return db("projects").where({id:projectId})
  }
 


