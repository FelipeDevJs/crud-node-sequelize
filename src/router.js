const router = require('express').Router()
const Usercontroller = require('./controller/Usercontroller')
const Commentcontroller = require('./controller/Commentcontroller')

router.get('/', Usercontroller.inicio)
router.post('/create', Usercontroller.create)
router.get('/users', Usercontroller.list)
router.put('/update/:id', Usercontroller.update)
router.delete('/delete/:id', Usercontroller.delete)
router.get('/user/comments/:id', Commentcontroller.usercomment)

router.post('/comment', Commentcontroller.create)
router.get('/comments', Commentcontroller.list)
router.delete('/delete/comments/:id', Commentcontroller.delete)

module.exports = router