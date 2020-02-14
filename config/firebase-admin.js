const admin = require("firebase-admin")
const configs = require("./admin-variables")

const { credential, projectId, databaseURL } = configs

admin.initializeApp({
  credential: admin.credential.applicationDefault(credential),
  databaseURL,
  projectId
})

module.exports = admin
