import express from "express";

const signUpRouter = express.Router();

signUpRouter.get("/", (req, res, next) => {
  res.render("signUp");
});

export default signUpRouter;
