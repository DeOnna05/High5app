const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Recognition"
);

const Users = [
    {
        name:"DeOnna"
    },
    {
        name:"Adam"
    },
    {
        name:"Eve"
    },
    {
        name:"Matthew"
    },
    {
        name:"Mark"
    },
    {
        name:"Luke"
    },
    {
        name:"John"
    },
]


db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany())
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });