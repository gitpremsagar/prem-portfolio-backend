import express from "express";
const router = express.Router();

import { getAllTechnologyNames } from "../controllers/technologyName.controllers.js";

router.get("/", getAllTechnologyNames);

export default router;
