const router = require("express").Router()
const db = require("./projects-model")
const restricted = require("../../middlewares/restricted")


// gets all projects 

router.get("/", restricted, async (req, res) => {
  try {
    const projects = await db.getProjects()
    res.status(200).json(projects)
  } catch ({ message }) {
    console.log(message)
    res.status(500).json(err.message)
  }
})

// <---------------------------------------------------------------------------->

// Get project by specified ID 

router.get("/:id", restricted, async (req, res) => {
    const id = req.params.id
    try {
      const project = await db.getProjectById(id)
      res.status(200).json(project)
    } catch ({ message }) {
      console.log(message)
      res.status(500).json(err.message)
    }
  })


module.exports = router
