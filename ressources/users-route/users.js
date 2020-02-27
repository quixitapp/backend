const router = require("express").Router()
const db = require("./users-models")
const restricted = require("../../middlewares/restricted")

router.get("/", async (req, res) => {
  try {
    const users = await db.getUsers()
    res.status(200).json(users)
  } catch ({ message }) {
    console.log(message)
    res
      .status(500)
      .json({ errorMessage: `Server couldn't retrieve the users.` })
  }
})

module.exports = router
