"use strict";

import { Router } from "express";

const router = Router();

router.post("/login");
router.post("/register");

router.get("/todo");

export default router;
