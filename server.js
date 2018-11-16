//importing express and mongoose and setting port
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app =  express();
//prepare express routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//start mongo connegtion
mongoose.connect('mongodb://localhost/Recognition', { useNewUrlParser: true });

//importing api routes file
// require('./routes/api-routes')(app);

app.listen(PORT, function() {
    console.log(`App currently running on port ${PORT}`);
  });