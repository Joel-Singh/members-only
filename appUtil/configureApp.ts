import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "../routes";
import usersRouter from "../routes/users";
import signUpRouter from "../routes/sign-up";

interface Options {
  middleware: boolean;
  routes: boolean;
  viewEngine: boolean;
}

function configureApp(app: Express, options: Options) {
  if (options.viewEngine) {
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");
  }

  if (options.middleware) {
    app.use(logger("dev"));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "public")));
  }

  if (options.routes) {
    app.use("/", indexRouter);
    app.use("/users", usersRouter);
    app.use("/sign-up", signUpRouter);
  }
}

export default configureApp;
