const jwtDecode = require("jwt-decode")
const db = require("../ressources/auth-route/register-model")

const restricted = async (req, res, next) => {
  const auth = req.headers.authorization
  const userToken = auth.replace(/Bearer /g, "")

  if (!userToken) {
    res.status(401).json({ message: "You must be logged in to see that." })
  } else {
    const token = await jwtDecode(userToken)
    const user = await db.getUserByName(token.nickname)
    if (!user) {
      res.status(404).json({ errorMessage: `User doesn't exist!` })
    } else {
      req.user = user
      req.decodedJwt = token
      next()
    }
  }
}

module.exports = restricted
