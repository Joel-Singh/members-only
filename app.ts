import "dotenv/config";
import express, { Request, Response, NextFunction, Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError, { HttpError } from "http-errors";
import connectToRealDb from "./DbConnectFunctions/connectToRealDb";
import configureApp from "./appUtil/configureApp";

const app = express();

configureApp(app, {
  middleware: true,
  routes: true,
  viewEngine: true,
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

function useMiddleware(app: Express) {
  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
}

connectToRealDb(process.env.MONGO_URI!);

export default app;
