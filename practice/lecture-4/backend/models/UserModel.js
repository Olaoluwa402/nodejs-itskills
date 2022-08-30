import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    email:{type:String, required:[true, 'email is required'],unique:true},
    password:{type:String, required:[true, 'password is required']}
})


userSchema.methods.passwordMatched = async function(passwordToBeVerified){
      return await bcrypt.compare(passwordToBeVerified, this.password)
}

userSchema.pre('save', async function(next){
    console.log('this',this)
     if(!this.isModified("password")){
            next()
     }

     const salt = await bcrypt.genSalt(10);
     console.log('salt',salt)
     const hashed = await bcrypt.hash(this.password, salt)
     console.log('hashed',hashed)

    this.password = hashed;
})

const User = mongoose.model('User', userSchema)

export default User;