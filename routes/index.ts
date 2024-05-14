"use strict";

import { Router } from "express";
import UserController from "../controller/UserController";
import TodoController from "../controller/TodoController";

const router = Router();

router.post("/login", UserController.login);
router.post("/register", UserController.register);

router.get("/todos", TodoController.showAll);
router.get("/todos/:id", TodoController.showTodo);
router.post("/todos", TodoController.addTodo);
router.put("/todos/:id", TodoController.editTodo);
router.delete("/todos/:id", TodoController.deleteTodo);

export default router;
