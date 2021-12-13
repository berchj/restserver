const { Schema, model } = require('mongoose')
const emailSchema = Schema({
    email:{
        type:String,
        required:[true,'email is required']
    }
})
module.exports = model('Email', emailSchema)