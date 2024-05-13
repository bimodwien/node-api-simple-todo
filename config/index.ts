"use strict";

import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "bimobimo",
  database: "todo",
});

export default db;
