const { response } = require('express')
const getUsers =  (req, res = response) => {
    res.json({ message: 'get - controller' })
}
const postUser = (req, res = response) => {
    res.json({
        msg:'response',
        body:req.body
    })
}
const putUser = (req, res = response) => {
    res.status(201).json({ message: 'put - controller' })
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