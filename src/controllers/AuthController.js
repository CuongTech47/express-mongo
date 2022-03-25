



class AuthController{
    index(req,res,next){
       res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
    }
    /* profile(req , res , next) {
        res.send(JSON.stringify(req.oidc.user))
    } */
    
  
    
}
module.exports = new AuthController