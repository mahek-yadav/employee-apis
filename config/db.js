const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mahekyadav23:mahek123@cluster0.zx9jqxf.mongodb.net/?appName=Cluster0')

const db=mongoose.connection;
db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});
db.on("disconnected",()=>{
    console.log("MongoDB disconnected ");
});
db.on("erroe",()=>{
    console.log("MongoDB connection error:",error);
});


modeule.exports=db;