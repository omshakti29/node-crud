const mongoose = require('mongoose')
const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
})

const UserModel = mongoose.model('user',user)

module.exports=UserModel