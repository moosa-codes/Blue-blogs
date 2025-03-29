import { Router } from "express";
import { register, login } from "../controllers/authController.js";


const router = Router();
// GET 
router.get("/");

// POST
router.post("/register", register);
router.post("/login", login);

export default router;