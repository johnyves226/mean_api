const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/task",{useNewUrlParser: true,useUnifiedTopology: true}).
then(
    ()=>{
        console.log("DB WELL CONNETED");
    }
).catch((error)=>{
    console.log("ERROR WAS FIND HERE",error);
})


module.exports = mongoose;