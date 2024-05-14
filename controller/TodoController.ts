"use strict";

import { Request, Response } from "express";
import TodoService from "../services/todoService";

class TodoController {
  static async showAll(req: Request, res: Response) {
    try {
      const result = await TodoService.serviceShowAll();
      res.status(200).send({
        message: "Fetching success",
        data: result,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }

  static async showTodo(req: Request, res: Response) {
    try {
      const result = await TodoService.serviceShowTodo(req);
      res.status(200).send({
        message: "Fetching by ID",
        data: result,
      });
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }

  static async addTodo(req: Request, res: Response) {}

  static editTodo() {}

  static deleteTodo() {}
}

export default TodoController;
