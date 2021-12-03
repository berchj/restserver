require('dotenv').config()
const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        //middlewares
        this.middlewares()
        //routes
        this.routes()
    }
    middlewares() {
        //public dir
        this.app.use(express.static('public'))
        //cors
        this.app.use(cors())
        //json body
        this.app.use(express.json())
    }
    routes() {
       this.app.use(this.usersPath,require('../routes/users'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running on port ${this.port}`)
        })
    }

}
module.exports = Server