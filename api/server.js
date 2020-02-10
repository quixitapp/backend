const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const server = express()

const registerRouter = require("../ressources/auth-route/register")
const usersRouter = require("../ressources/users-route/users")

server.use(express.json())
server.use(helmet())
server.use(morgan("dev"))
server.use(cors())

server.use("/api/register", registerRouter)
server.use("/api/users", usersRouter)

server.get("/", (req, res) => {
  res.status(200).json({ "Welcome to": "Quixit" })
})

module.exports = server
