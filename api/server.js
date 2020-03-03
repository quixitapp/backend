const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const server = express()

const registerRouter = require("../ressources/auth-route/register")
const loginRouter = require("../ressources/auth-route/login")
const usersRouter = require("../ressources/users-route/users")
const projectsRouter = require('../ressources/projects-route/projects')
const invoicesRouter = require('../ressources/invoice-route/invoice')
const stripeRouter = require('../ressources/stripe-route/stripe')

server.use(express.json())
server.use(helmet())
server.use(morgan("dev"))
server.use(cors())

server.use("/api/register", registerRouter)
server.use("/api/login", loginRouter)
server.use("/api/users", usersRouter)
server.use("/api/projects", projectsRouter)
server.use("/api/invoices", invoicesRouter)
server.use("/api/payment", stripeRouter)

server.get("/", (req, res) => {
  res.status(200).json({ "Welcome to": "Quixit" })
})

module.exports = server
