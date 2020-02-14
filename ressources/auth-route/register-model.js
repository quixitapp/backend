const db = require("../../data/dbConfig")

module.exports = {
  addUser,
  getUserById,
  getUserByName
}

async function addUser(user) {
  const [id] = await db("users").insert(user)
  return getUserById(id)
}

function getUserById(uid) {
  return db("users")
    .where({ uid })
    .first()
}

function getUserByName(nickname) {
  return db("users")
    .where({ nickname })
    .first()
}
