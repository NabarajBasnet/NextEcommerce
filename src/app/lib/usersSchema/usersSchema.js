import mongoose from "mongoose"


const Users = new mongoose.Schema({
    firstName:String,
    secondName:String,
    address:String,
    city:String,
    state:String,
    phoneNumber:String,
    email:String,
    password:String,
    confirmPassword:String
})


const User = mongoose.models.acmeusers || mongoose.model('acmeusers', Users)
export default User;


