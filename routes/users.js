const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const { getUsers, postUser, putUser, deleteUser } = require('../controllers/users.controller')
const { isValidRole, emailExist, userIdExist } = require('../helpers/db-validators')
const { validateFields } = require('../middlewares/validateFields')
const Role = require('../models/role')
const router = Router()
router.get('/', getUsers)
router.post('/',[    
    check('name','name is required').not().isEmpty(),
    check('password','password must have 6 letters at least').isLength({min:6}),
    check('role').custom(isValidRole),
    check('email').custom(emailExist),
    validateFields
], postUser)
router.put('/:id',[
    check('id',['Invalid id']).isMongoId(),
    check('id').custom(userIdExist),
    check('role').custom(isValidRole),
    validateFields
],putUser)
router.delete('/', deleteUser)
module.exports = router