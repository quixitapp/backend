const db = require("../../data/dbConfig")

module.exports = {
  getProjects,
  getProjectById,
  createProject,
}

function getProjects() {
  return db("projects")
}


function getProjectById(projectId) {
    return db("projects").where({id:projectId})
  }

  function createProject(newProject) {
    return db("projects").insert(newProject)
  }
 
 


