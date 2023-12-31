import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true, required: true, index: true },
  password: String,
  img: String,
  rol: String, 
});

const userModel = mongoose.model("usersCoder", userSchema); //nombre, modelo

export default userModel;

