const router = require("express").Router()
const admin = require("../../config/firebase-admin")
const db = require("./register-model")

router.post("/", async (req, res) => {
  try {
    const validToken = await admin
      .auth()
      .verifyIdToken(req.headers.authorization)
    if (!validToken) res.status(400).json({ errorMessage: "Invalid Token!" })

    const foundUser = await db.getUserById(validToken.uid)
    if (foundUser) {
      res.status(200).json(foundUser)
    } else {
      const user = {
        uid: validToken.uid,
        email: validToken.email
      }

      const newUser = await db.addUser(user)
      res.status(201).json(newUser)
    }
  } catch (e) {
    res.status(500).json({ errorMessage: e.message })
  }
})

module.exports = router
