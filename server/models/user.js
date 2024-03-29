const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({  
  username: {
    type: String,
    required: true,
    unique: true,
    min: 1,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  avatarimage: {
    type: String,
    default:"",
  },
})

// compile model from schema
module.exports = mongoose.model("User", UserSchema)