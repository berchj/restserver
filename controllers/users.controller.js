const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const getUsers =  (req = request, res = response) => {
    const {name,api_key} = req.query
    res.json({name,api_key})
}
const postUser = async(req, res = response) => {
    const {name,email,password,role} = req.body
    const user = new User({name,email,password,role})    
    //encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password,salt)
    //save
    await user.save()
    //response
    res.status(201).json({message:'user created',user:user})
}
const putUser = async (req, res = response) => {
    const id = req.params.id
    const {password,google, ...bodyLeft} = req.body
    //TODO validate id database
    if(password){
        //encrypt password
        const salt = bcryptjs.genSaltSync(10);
        bodyLeft.password = bcryptjs.hashSync(password,salt)
    }
    const user = await User.findByIdAndUpdate(id,bodyLeft)
    res.json({message:'user updated',user})
}
const deleteUser = (req, res = response) => {
    res.status(201).json({ message: 'delete - controller' })
}
module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}