import express = require("express");
import { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routers/routes";
const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
