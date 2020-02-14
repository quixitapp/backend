const router = require("express").Router()
const admin = require("firebase-admin")
const db = require("./register-model")
const configs = require("./register-variables")

const { credential, projectId, databaseURL } = configs

admin.initializeApp({
  credential: admin.credential.applicationDefault(credential),
  databaseURL,
  projectId
})

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
