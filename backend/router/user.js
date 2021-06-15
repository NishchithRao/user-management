const router = require('express').Router();
const { allUsers, updateUser, deleteUser, getUser, getPicture, addUserToManager } = require('../controller/user');
const {isManagerOrAdmin,isAdmin} = require('../middleware/permissions');
const { isLoggedIn } = require('../middleware/auth');
const { updatePicture, promoteRole } = require('../middleware/user');

router.put("/:id",isLoggedIn,isManagerOrAdmin,updateUser);

router.put("/picture/:id",isLoggedIn,updatePicture,updateUser);

router.delete("/:id",isLoggedIn,isAdmin,deleteUser);

router.get("/picture/:id",isLoggedIn,getPicture);

router.get("/manager/:id/add/",isLoggedIn,isManagerOrAdmin,addUserToManager);

router.get("/:id",isLoggedIn,getUser);

router.get("/",isLoggedIn,allUsers);

router.get("/promote/:id",isLoggedIn,isAdmin,promoteRole,updateUser);

module.exports = router;