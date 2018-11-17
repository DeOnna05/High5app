const express = require('express');
const router = express.Router();
const db = require('../models');

//Get route for all high5s
router.get('/api/high5s', function(req, res){
    db.High5s.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error)
    });
});

//Get route to get all users
router.get('/api/users', function(req, res){
    db.Users.find({})
    .then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error)
    });
});

//Post route to create high5s
router.post('/api/high5s', function(req, res){
    console.log(req.body)
    db.High5s.create(req.body)
    .then(function(data){
        res.json(data);
    })
    .catch(function(error){
        res.json(error)
    });
});

module.exports = router;