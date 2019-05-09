var mongoose= require('./MongoConnection')


var itemSchema= mongoose.Schema({
    name:String,
    description:String
});
var Item= mongoose.model('items',itemSchema);

module.exports=Item