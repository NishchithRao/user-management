const User = require("../model/user");
const {sign} = require("jsonwebtoken");


exports.signup = (req,res) => {
    let user = new User(req.body);
    user.save((err,user) => {
        if(err) {
            console.log(err);
            user.hashed_password = undefined;
            user.salt = undefined;
            return res.json({error:err});
        }
        return res.json(user);
    })
}


exports.signin = (req,res) => {
    const {email,password} = req.body;
    console.log(email,password);
    User.findOne({email},(err,user)=> {
        if(!user) {
            return res.json({error:{
                code: "auth/no-account-found"
            }});
        }
        if(err) {
            console.log(err);
            return res.json({error:{
                code: "auth/no-account-found"
            }});
        }
        if(!(user.checkPassword(password))) {
            return res.json({error:{
                code: "auth/invalid-password"
            }});
        }
        let token = sign({_id:user._id,role:user.role},process.env.SECRET,{expiresIn:'5h'});
        console.log(token);
        return res.json({token});
    })
}