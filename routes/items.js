var express = require('express');
var router = express.Router();
var Item = require('../models/Item');

/* root path for /items */
router.get('/', function(req, res) {
  Item.find().then(function(items){
    res.json(items);
  });
});

router.put('/',function(req,res){
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

router.post('/:idItem',function(req,res){
  Item.updateOne({_id:req.params.idItem},req.body)

  res.send("updated")

})


module.exports = router;
