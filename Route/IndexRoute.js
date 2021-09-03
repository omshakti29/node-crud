const express = require('express')
const router = express.Router()
const {save_user,show,distroy,update,edit} =require('../Controller/UserController')

router.get('/create-index',function(req, res){
    res.render('index')

})
router.post('/create-index',save_user)
router.get('/show',show)
router.get('/delete/:id',distroy)
router.post('/update',update)
router.get('/edit',edit)
module.exports=router