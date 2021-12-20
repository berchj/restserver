const Role = require('../models/role')
const Email = require('../models/email')
const User = require('../models/user')
const isValidRole = async (role = '') => {
    const existRole = await Role.findOne({ role })
    if (!existRole) throw new Error(`Role ${role} is not valid`)
}
const emailExist = async ( email = '' ) => {
    const existEmail = await Email.findOne({email})
    if (existEmail) throw new Error(`Email: ${email} is alredy registered`)
}
const userIdExist = async ( id ) => {
    const existIdUser = await User.findById(id)
    if (!existIdUser) throw new Error(`User with id: ${id} doesn't exist`)
}
module.exports = {
    isValidRole,
    emailExist,
    userIdExist
}