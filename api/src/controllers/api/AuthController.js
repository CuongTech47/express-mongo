
const User = require('../../models/user')


class AuthController{
    index(req,res,next){
       res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
    }
    profile(req , res , next) {
        const newUser = new User({
            user_name: req.oidc.user.name,
            user_pic: req.oidc.user.picture,
            user_email: req.oidc.user.email,
        });
	    const savedUser = newUser.save();
	    res.json(savedUser);
    }
    saveUser(req , res , next) {
        const newUser = new User({
            user_name: req.oidc.user.name,
            user_pic: req.oidc.user.picture,
            user_email: req.oidc.user.email,
        });
	
	    const savedBrand = newBrand.save();
	    res.json(savedBrand);
    }
    showUser(req , res , next) {
        User.find({})
        .then(users =>{
            res.json({data : users})
        })
        .catch(next)
    }
}
module.exports = new AuthController