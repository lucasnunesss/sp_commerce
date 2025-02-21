import mongoose from "mongoose";
const { Schema } = mongoose;

const user = new Schema({
  title: String,
  img: String,
  category: String,
  description: String,
  price: Number

})

export const User = mongoose.models.User || mongoose.model('User', user)

