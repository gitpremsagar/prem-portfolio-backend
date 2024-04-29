import express from "express";
const router = express.Router();

import {
  getAllTechnologyNames,
  createTechnologyName,
} from "../controllers/technologyName.controllers.js";

router.get("/", getAllTechnologyNames);

router.post("/", createTechnologyName);

export default router;
