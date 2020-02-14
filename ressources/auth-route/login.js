const router = require("express").Router()
const admin = require("../../config/firebase-admin")
const db = require("./register-model")

router.post("/", async (req, res) => {
  try {
    const validToken = await admin
      .auth()
      .verifyIdToken(req.headers.authorization)
    if (!validToken) {
      res.status(400).json({ errorMessage: "Invalid Token!" })
    } else {
      const foundUser = await db.getUserById(validToken.uid)
      if (!foundUser) {
        res.status(404).json({
          errorMessage: `User with ID ${validToken.uid} doesn't exit!`
        })
      } else {
        res.status(200).json(foundUser)
      }
    }
  } catch ({ message }) {
    console.log(message)
    res.status(500).json({ errorMessage: message })
  }
})

module.exports = router
