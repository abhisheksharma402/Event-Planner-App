const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const validator = require('validator');
const queryData = require('../dbconnect/query');
const services = require('../services/checkService');
const post = require('../services/post');

router.post('/',async (req,res)=>{
    debugger;
    const body = req.body;
    // console.log(body);
    // console.log(body.password);
    if(body===undefined || body===null || Object.keys(body).length===0 || body.constructor!==Object) {
        res.json({error: "Please enter all the details!!"});
    }
    const row = await services.getByEmail(body.email);
    console.log("row: ",row);
    if(row.length>0){
        res.json({error: "Account with this email already exists"});
    }
    else{

        const regexEmail = new RegExp(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/);
        const regexPhone = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
        
        if(!regexEmail.test(body.email)){
            res.json({error: "Please enter a valid email address!!"});
            return;
        }
        else if(!regexPhone.test(body.phone)){
            res.json({error:"Please enter a valid phone number!!"});
            return;
        }   
        else if(!validator.isStrongPassword(body.password, {
            minLength:8,
            minLowecase:1,
            minUppercase:1,
            minNumbers:1,
            minSymbols:1,
            returnScore:false
        })){
            res.json({error:"Please enter a valid password!!"});
            return;
        }

        //register logic

        // hashing the password

        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err,salt)=>{
            bcrypt.hash(body.password,salt)
                .then(async (hash)=>{
                    const user = {...req.body, "password":hash};
                    console.log(user);
                    res.json(await post.storeUser(user));
                });
        });
    }
});

module.exports = router;