const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
const queryData = require('../dbconnect/query');
const services = require('../services/checkService');

router.post('/',async(req,res)=>{
    let body = req.body;
    console.log(body);
    const user = await services.getByEmail(body.email);
    if(user.length===0){
        res.send({error: 'Account with that email does not exist. Please create an account first.'});
    }
    bcrypt.compare(body.password, user[0].password).then((result)=>{
        if(result){
            const id = user[0].user_id
            const name = user[0].user_name;
            const email = user[0].email;
            const user_info = {
                id,
                name,
                email
            }
            const token = jwt.sign({ id }, 'secret');
            res.cookie("t", token, { expire: new Date() + 9999 });
            res.json({ ...user_info, token });
        }
        else{
            res.json({"error": "Incorrect email or password"});
        }
    });
});

module.exports = router;