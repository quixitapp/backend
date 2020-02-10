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

function getUserById(id) {
  return db("users")
    .where({ id })
    .first()
}

function getUserByName(nickname) {
  return db("users")
    .where({ nickname })
    .first()
}
