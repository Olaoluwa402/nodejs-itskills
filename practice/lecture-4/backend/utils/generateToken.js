import JWT from "jsonwebtoken";

const generateToken = async(id)=> {
    return await JWT.sign({id}, process.env.JWTSECRET, {expiresIn:'1min'})
}

export default generateToken

// {
//     "title":"This will work",
//     "body":"should this work or not?",
//     "image":"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600"
// }