var mongoose= require('mongoose');

/*
 */
mongoose.connect("mongodb://localhost:27017/testmongo", { useNewUrlParser: true })
    .then(function(){
    console.log("connected")
}).catch(function(err){
    if(err) {
        console.log(err);
        process.exit(-1);
    }
});


module.exports=mongoose;



