"use strict";

import { QueryError, QueryResult } from "mysql2";
import db from "../config";

export async function executeQuery(query: string) {
  return await new Promise((resolve, reject) => {
    try {
      db.query(query, (error: QueryError, result: QueryResult) => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}
