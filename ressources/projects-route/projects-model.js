const db = require("../../data/dbConfig")

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
}

function getProjects() {
  return db("projects")
}

function getProjectById(projectId) {
    return db("projects").where({id: projectId})
  }

function createProject(newProject) {
    return db("projects").insert(newProject)
  }

function updateProject(projectId,data) {
  return db("projects")
    .where({id:projectId})
    .update(data)
  }

function deleteProject(projectId){
  return db("projects")
    .where({id: projectId})
    .del()
}

