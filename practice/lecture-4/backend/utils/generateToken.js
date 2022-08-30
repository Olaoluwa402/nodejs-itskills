import JWT from "jsonwebtoken";

const generateToken = async(id)=> {
    console.log(await JWT.sign({id}, process.env.JWTSECRET, {expiresIn:'2hrs'}))
    return await JWT.sign({id}, process.env.JWTSECRET, {expiresIn:'2hrs'})
}

export default generateToken