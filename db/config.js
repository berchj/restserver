require('dotenv').config()
const mongoose = require('mongoose')
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,            
        })
        console.log('connected to database')
    } catch (error) {
        console.log(error.message)
        throw new Error('database error.')
    }
}
module.exports = {
    dbConnection
}