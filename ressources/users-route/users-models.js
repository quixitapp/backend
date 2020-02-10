const db = require("../../data/dbConfig")

module.exports = {
  getUsers,
  getUserById,
  getUserByName,
  updateUser
}

function getUsers() {
  return db("users").select(
    "id",
    "first_name",
    "last_name",
    "nickname",
    "email",
    "address",
    "phone",
    "skills",
    "experience"
  )
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

function updateUser(id, data) {
  return db("users")
    .where("id", id)
    .update(data)
}
