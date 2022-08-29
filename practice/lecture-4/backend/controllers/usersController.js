import User from "../models/UserModel.js"

//@desc : get all user
//route: GET /api/v1/users
//access: privite - admin only
const getUsers = async(req,res) => {
    res.send('get all users')
}

//@desc : create user
//route: POST /api/v1/users/register
//access: public 
const createUser= async(req,res) => {
    const {email, password} = req.body
 
    try{

        //check that user does not exist
        const userExist = await User.find({email:email})
        console.log(userExist)
         if(userExist.length > 0){
            throw new Error('Email already exist')
         }
        //create use
        const user = await User.create({
            email,
            password
        })

        res.status(200).json({
            status:'success',
            user
        })
       
    }catch(err){
        console.log(err)
        res.status(401).json({
            status:'fail',
            error:err.message
        })
    }
}

//@desc : login user
//route: POST /api/v1/users/login
//access: public 
const loginUser = async(req,res) => {
    res.send('login user')
}

export {
    getUsers,
    createUser,
    loginUser
}