import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String, required:[true, 'name is required']},
    age:{type:Number, required:[true,'age is required']},
    email:{type:String, unique:true, required:[true, 'email is required']}
},
{
    timestamp:true
}
)

const User = mongoose.model('User', userSchema)

export default User;


