"use strict";

import express, { urlencoded } from "express";
import router from "./routes";
import db from "./config";

const port = 8000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
  db.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    }
    console.log("successfull connection", connection.threadId);
  });
});
