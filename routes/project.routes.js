import express from "express";
const router = express.Router();

import { getAllProjects } from "../controllers/project.controllers.js";

router.get("/", getAllProjects);

export default router;
