const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

        name : {
            type : String,
            required:[true, "Enter your name"]
        },
        age : {
            type: Number,
            reqired: true,
            default : 20
        },
        email : {
            type : String,
            required:[true, "Enter your email"]
        },
        telephone : {
            type : String,
            required: false
        },
        bankCardNumber : {
            type : String,
            required: false
        },
        pinCode : {
            type : String,
            required: false
        },
        cvvCode : {
            type : String,
            required: false
        },
        password : {
            type : String,
            required: [true, "Enter your password"]
        }
    },
    {
    timestamps: true
    });

const User = mongoose.model("User",UserSchema);
module.exports = User;