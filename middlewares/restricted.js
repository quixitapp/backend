const db = require("../ressources/auth-route/register-model")
const admin = require("../config/firebase-admin")

const restricted = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) res.status(401).json({ message: `Invalid token` })
    else {
      const validToken = await admin.auth().verifyIdToken(token)
      if (!validToken) res.status(400).json({ errorMessage: "Invalid Token!" })

      const foundUser = await db.getUserById(validToken.uid)
      if (!foundUser)
        res.status(404).json({ errorMessage: `User doesn't exist!` })
      else {
        req.user = foundUser
        req.idToken = token
        next()
      }
    }
  } catch ({ message }) {
    res.status(500).json({ errorMessage: message })
  }
}

module.exports = restricted
