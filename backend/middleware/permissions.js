const {verify} = require('jsonwebtoken');

exports.isManagerOrAdmin = (req,res,next) => {
    let role = req.user.role;
    let _id=req.params?.id;
    console.log(req.params.id,req.user);
    if(req.user._id===_id) {
        next();
        return;
    }
    if(role==1||role==2) {
        next();
        return;
    }
    return res.json({error: {
        code: "permissions/not-a-manager-or-admin"
    }});
}

exports.isAdmin = (req,res,next) => {
    let role = req.user.role;
    console.log(role);
    if(role==2) {
        next();
        return;
    }
    return res.json({error: {
        code: "permissions/not-a-admin"
    }});
}