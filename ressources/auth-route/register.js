const router = require("express").Router()
const jwtDecode = require("jwt-decode")
const db = require("./register-model")
const jwChecks = require("../../middlewares/jwtChecks")
const restricted = require("../../middlewares/restricted")

router.post("/", async (req, res) => {
  try {
    const token = req.headers.authorization
    if (req.headers && req.headers.authorization && token) {
      if (token) {
        const decode = jwtDecode(token)
        // const userToken = token.replace(/Bearer/g, "")

        const foundUser = await db.getUserByName(decode.nickname)
        if (foundUser) {
          req.status(200).json(foundUser)
        } else {
          console.log("nickname= ", decode.nickname)
          const newUser = {
            nickname: decode.nickname,
            email: decode.email
          }
          const data = await db.addUser(newUser)
          const foundUser = await db.getUserById(data.id)
          res.status(200).json(foundUser)
        }
      }
    } else {
      res.status(400).json({ errorMessage: "Invalid Credentials!" })
    }
  } catch ({ message }) {
    // console.log(message)
    res.send(message).json({ message: "Unable to sign up" })
  }
})

module.exports = router
