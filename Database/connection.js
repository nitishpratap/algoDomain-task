const mongoose =  require('mongoose')
const conn = mongoose.connect("mongodb://localhost:27017/Task",{useNewUrlParser: true,useUnifiedTopology: true })
conn.then(()=>{
    console.log('connected.....................');
}).catch((e)=>{
    console.log(e);
})
module.exports = conn;
