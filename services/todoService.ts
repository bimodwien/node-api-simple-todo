"use strict";

import { Request, Response } from "express";
import { executeQuery } from "../lib/mysql";
import { todos } from "../model/todo";

class TodoService {
  static async serviceShowAll() {
    const query: string = `select * from Todos`;
    return executeQuery(query);
  }

  static serviceShowTodo(req: Request) {
    const id = req.params.id;
    const query: string = `select * from Todos where id = ${id}`;
    return executeQuery(query);
  }

  static serviceAddTodo(req: Request) {
    try {
      const { todo, date }: todos = req.body;
      const query = `insert into `;
    } catch (error) {}
  }

  static serviceEditTodo() {}

  static serviceDeleteTodo() {}
}

export default TodoService;
