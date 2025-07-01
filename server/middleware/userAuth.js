import jwt from 'jsonwebtoken';

const userAuth =async(req,res,next)=>{
    const {token} =req.cookies;
    if(!token){
        return res.status(401).json({msg:'Not authorized, no token'});
    }
    try {
       const tokenDecode=  jwt.verify(token,process.env.JWT_SECRET);
       if(tokenDecode.id){
        req.body.userId = tokenDecode.id;
       }else{
        return res.status(403).json({msg:'Token is not valid'});
       }
       next();
    } catch (error) {
        return res.status(404).json({msg:error.message});
    }
}

export default userAuth;