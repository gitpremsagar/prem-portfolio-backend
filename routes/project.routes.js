import express from "express";
const router = express.Router();

import {
  getAllProjects,
  createProject,
} from "../controllers/project.controllers.js";

router.post("/", createProject);

router.get("/", getAllProjects);

export default router;
