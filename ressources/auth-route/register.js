const router = require("express").Router()
const db = require("./register-model")
const admin = require("firebase-admin")
// const restricted = require("../../middlewares/restricted")
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://quixit-7d5f2.firebaseio.com"
})

router.post("/", (req, res) => {
  admin
    .auth()
    .verifyIdToken(req.headers.authorization)
    .then(token => {
      console.log(token)
    })
    .catch(({ message }) => console.log(message))
})

module.exports = router
