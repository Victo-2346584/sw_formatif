import express from "express";
import { getAllSalutations, getRandomSalutation, addSalutation } from "../controllers/salutations.controller.js";

const router = express.Router();

router.get("/liste", getAllSalutations);
router.get("/", getRandomSalutation);
router.post("/", addSalutation);

export default router;
