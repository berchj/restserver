const { response, request } = require('express')
const getUsers =  (req = request, res = response) => {
    const {name,api_key} = req.query
    res.json({name,api_key})
}
const postUser = (req, res = response) => {
    res.json({
        msg:'response',
        body:req.body
    })
}
const putUser = (req, res = response) => {
    const id = req.params.id
    res.json({id})
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