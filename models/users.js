//importing mongoose and setting up mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//New user schema
const UserSchema = new Schema({
    //do I just need users
    user: String
});
//mongoose model function establishes user schema
const Users = mongoose.model("Users", UserSchema)

module.exports = Users;