import cors from 'cors'
import express from 'express'
import { router } from '../routes/users.js'

export class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  middlewares() {
    // Cors
    this.app.use(cors())

    // Read and parse of body
    this.app.use(express.json())

    // Public directory
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usersPath, router)
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running on port: ${this.port}`)
    )
  }
}
