const User = require("../model/user");
const { sign } = require("jsonwebtoken");


exports.signup = (req, res) => {
    let {email} = req.body;
    //Check if user email already exists and send error if true
    return User.findOne({ email }, (err, user) => {
        if (user) {
            return res.json({
                error: {
                    code: "auth/account-exists"
                }
            });
        }
        else if (err) {
            console.log(err);
            return res.json({
                error: err
            });
        }
        else {
            //Create new user and send it back
            let user = new User(req.body);
            return user.save((err, user) => {
                if (err) {
                    console.log(err);
                    return res.json({ error: err });
                }
                user.hashed_password = undefined;
                user.salt = undefined;
                return res.json(user);
            })
        }
    });
}


exports.signin = (req, res) => {
    const { email, password } = req.body;
    // Find if user exists
    User.findOne({ email }, (err, user) => {

        //If user doesn't exist or if error occured return error
        if (!user) {
            return res.json({
                error: {
                    code: "auth/no-account-found"
                }
            });
        }
        if (err) {
            console.log(err);
            return res.json({
                error: {
                    code: "auth/no-account-found"
                }
            });
        }
        //Check if entered password is valid
        if (!(user.checkPassword(password))) {
            return res.json({
                error: {
                    code: "auth/invalid-password"
                }
            });
        }
        //Create auth tokens and send it
        let token = sign({ _id: user._id, role: user.role }, process.env.SECRET, { expiresIn: '5h' });
        return res.json({ token });
    })
}