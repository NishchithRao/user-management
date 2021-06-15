const User = require("../model/user");


exports.getUser = (req,res) => {
    User.findById(req.params.id,(err,user) => {
        if(err) {
            return res.json({error: err});
        }
        return res.json(user);
    });
}

exports.allUsers = (req,res) => {
    let {role} = req.user;
    if(role==2)
    User.find((err,users) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json(users);
    })
    else
    User.find({manager: req.user._id})
    .exec((err,users) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json(users);
    })
}

exports.updateUser = (req,res) => {
    console.log(req.body);
    User.findByIdAndUpdate({_id:req.params.id},
        {$set: req.body},
        {new:true},(err,user) => {
            if(err) {
                return res.json({error:err});
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            return res.json(user);
        });
    }

exports.deleteUser = (req,res) => {
    User.findByIdAndDelete({_id:req.params.id})
    .exec((err,deletedUser) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json({message: `User ${deletedUser.name} deleted!`});
    })
}

exports.getPicture = (req,res) => {
    const db = mongoose.connection.db;
    const mongo = mongoose.mongo;
    const gfs = Grid(db,mongo);
    let id = req.params.id;
    let picture = gfs.createReadStream({_id:id});
    picture.pipe(res);
}

exports.addUserToManager = (req,res) => {
    let userID = req.query.userID;
    User.findByIdAndUpdate(
        {_id:userID},
        {$set: {manager: req.params.id}},
        (err,user) => {
            if(err) {
                console.log(err);
                return res.json({error:err});
            }
            res.json(user);
        })
}
