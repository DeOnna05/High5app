const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const High5sSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "A Title is Required"
    },
    message: {
        type: String,
        trim: true,
        required: "A Message is Required"
    },
    sender: {
        type: String,
        required: "A Sender is Required"
    },
    receiver: {
        type: String,
        required: "A Receiver is Required"
    }
});

const High5s = mongoose.model("High5s", High5sSchema);

module.exports = High5s;