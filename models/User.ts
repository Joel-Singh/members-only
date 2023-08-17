import mongoose, { Schema } from "mongoose";

export interface UserProperties {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  membershipStatus: boolean;
  admin: boolean;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  membershipStatus: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model<UserProperties>("User", UserSchema);
export default User;
