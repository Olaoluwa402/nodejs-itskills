import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{type:String, required:[true, 'email is required'],unique:true},
    password:{type:String, required:[true, 'password is required']}
})

const User = mongoose.model('User', userSchema)

export default User;