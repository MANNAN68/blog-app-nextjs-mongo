import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", UserSchema);
