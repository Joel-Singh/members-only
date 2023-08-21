import User, { UserProperties } from "../../models/User";
import { Response } from "express";
import { RequestWithSignUpFormData } from "../../types/views/signUp";

// PROBLEM: Doesn't handle invalid data passed to it
const postController = async (
  req: RequestWithSignUpFormData,
  res: Response,
) => {
  const { firstName, lastName, username, password, admin } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    username,
    password,
    admin: admin === "true",
  } as UserProperties);

  try {
    await newUser.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Error occurred during user creation");
  }
};

export default postController;
