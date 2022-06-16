const Router = require('express')
const userController = require('../controllers/userController')
const autMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', autMiddleware, userController.check)

module.exports = router