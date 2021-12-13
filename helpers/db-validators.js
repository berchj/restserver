const Role = require('../models/role')
const Email = require('../models/email')
const isValidRole = async (role = '') => {
    const existRole = await Role.findOne({ role })
    if (!existRole) throw new Error(`Role ${role} is not valid`)
}
const emailExist = async ( email = '' ) => {
    const existEmail = await Email.findOne({email})
    if (!existEmail) throw new Error(`Email: ${email} is alredy registered`)
}
module.exports = {
    isValidRole,
    emailExist
}