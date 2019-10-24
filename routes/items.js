var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

router.get('/', function(req, res) {
  Item.find().then(function(items){
    res.json(items);
  });
});

router.get('/:idItem', function(req, res) {
  Item.findOne({_id:req.params.idItem}).then(item =>{

    res.json(item)
  }).catch(err=>{
    res.json({code:500})
  })
});


router.post('/',function(req,res){
  var newItem= new Item(req.body);
  newItem.save();
  res.send("saved")

});

router.delete('/:idItem',function(req,res){

  Item.remove({_id:req.params.idItem},function(err){
    console.log("Something went wrong")
  })
  res.send("deleted");
});

router.put('/:idItem',function(req,res){



  Item.updateOne({_id:req.params.idItem},req.body).then(ok =>{
    res.send("updated")
  }).catch(err =>{
    res.json(err)
  })



})


module.exports = router;
