const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");

 
router.get("/", function(req, res) {
    res.send("hey from users router");
});

router.post("/register", async function(req, res) {
   try{
     let {email,password, fullName} = req.body;

    let user = await userModel.create({
        email,
        password,
        fullName,
    });
    res.send(user);
   } catch (err){
    console.log(err.message);
   }
});


module.exports = router;
















