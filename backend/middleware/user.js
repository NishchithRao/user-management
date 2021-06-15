const { resolveCname } = require("dns");
const formidable = require("formidable");
const {createReadStream} = require("fs");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

exports.updatePicture = (req,res,next) => {
    const db = mongoose.connection.db;
    const mongo = mongoose.mongo;
    const gfs = Grid(db,mongo);
    let profilePicture;
    let form = formidable.IncomingForm();
    form.parse(req,(err,fields,file) => {
        if(err) {
            console.log(err);
            return res.json({error: err});
        }
        if(file) {
            let pictureStream = gfs.createWriteStream({
                filename: file.picture.name
            });
            profilePicture = pictureStream.id;
            createReadStream(file.picture.path).pipe(pictureStream);
        }
        req.body = {profilePicture};
        next();
    })
}

exports.promoteRole = (req,res,next) => {
    let {role} = req.query;
    req.body = {role:parseInt(role)};
    console.log(req.body);
    next();
}