import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  //uid: {
  //  type: String,
  //  required: true,
  //  unique: true
  //},
  // conversation counter?
  // statistics?
},
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema);

export default User;