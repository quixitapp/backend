const db = require("../ressources/auth-route/register-model")
const admin = require("firebase-admin")

const restricted = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    if (!token) res.status(401).json({ message: `Invalid token` })
    else {
      const data = await admin.auth().verifyIdToken(token)
      const user = await db.getUserById(data.id)
      if (!user) res.status(404).json({ errorMessage: `User doesn't exist!` })
      else {
        req.user = user
        req.idToken = token
        next()
      }
    }
  } catch ({ message }) {
    res.status(500).json({ errorMessage: `Unable to log user.` })
  }
}

module.exports = restricted
