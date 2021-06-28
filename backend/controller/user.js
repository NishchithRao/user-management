const User = require("../model/user");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

//Find user by id provided as route parameter
exports.getUser = (req,res) => {
    User.findById(req.params.id,(err,user) => {
        if(err) {
            return res.json({error: err});
        }
        return res.json(user);
    });
}

//List all users based on permissions:admin or manager
exports.allUsers = (req,res) => {
    let {role} = req.user;
    if(role==2) {
    return User.find((err,users) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json(users);
    })
}
    else if(role==1) {
        //If Manager, send users only which are under his supervision
    return User.find({manager: req.user._id})
    .exec((err,users) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json(users);
    })
}
    else
    //Return error as the user who iis requesting has no permissions
    return res.json({error: "permission/regular-user"})
}


//Update user details
exports.updateUser = (req,res) => {
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

//Delete user
exports.deleteUser = (req,res) => {
    User.findByIdAndDelete({_id:req.params.id})
    .exec((err,deletedUser) => {
        if(err) {
            return res.json({error:err});
        }
        return res.json({message: `User ${deletedUser.name} deleted!`});
    })
}

//Get profile picture of the user
exports.getPicture = (req,res) => {
    const db = mongoose.connection.db;
    const mongo = mongoose.mongo;
    const gfs = Grid(db,mongo);
    let id = req.params.id;
    //Check if picture Id exits in gridfs bucket
    gfs.exist({_id:id},(err,found) =>{
        if(err) return res.json({code: "msic/unexpected error"});
        if(found) {
            //return data as image
            res.contentType("image/png");
            let picture = gfs.createReadStream({_id:id});
            picture.pipe(res);
        }
        else {
            return res.json({code: "picture/not-found"});
        }
    });
}

exports.addUserToManager = (req,res) => {
    let userID = req.query.userID;
    User.findByIdAndUpdate(
        {_id:userID},
        {$set: {manager: req.params.id}},
        (err,user) => {
            if(err) {
                return res.json({error:err});
            }
            res.json(user);
        })
}
