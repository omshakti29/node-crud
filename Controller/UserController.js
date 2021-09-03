const UserModel = require('../Model/UseModel')

function save_user(req,res){
let name=req.body.name
let user = new UserModel({
    name
})
user.save()
.then((resp)=>{
    res.redirect('/index/show')
})
}

function show(req,res){
    UserModel.find()
    .then((resp)=>{
        res.render('table',{resp})
    }) 
}
function distroy (req,res){
    UserModel.findOneAndDelete({ _id: req.params.id },(resp)=>{
        res.redirect('/index/show')
    })
    


}
function update(req,res){
    console.log(req.body)
    UserModel.findByIdAndUpdate({_id:req.body.id},{name:req.body.name})
    .then(()=>{
        res.redirect('/index/show')
    })
}
function edit(req,res){
    let name=req.query.name
    let id=req.query.id

    res.render('update',{name,id})
}
module.exports={save_user,show,distroy,update,edit}