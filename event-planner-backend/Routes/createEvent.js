const express = require('express');
const router = express.Router();
const queryData = require('../dbconnect/query');
const services = require('../services/checkService');
const post = require('../services/post');

router.post('/', async (req,res)=>{

    const eventBody = req.body;

    res.json(await post.storeEvent(eventBody));

});

module.exports = router;