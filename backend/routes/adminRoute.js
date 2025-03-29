import { Router } from "express";
import Admin from '../models/admin.js';

const router = Router();

console.log(process.env.NODE_ENV);
router.get("/", (req, res) => {
    res.send("Hello admin");
});

router.post("/create", async (req, res) => {
    const { email, password, name, gstNo } = req.body;

    const admin = await Admin.find(); // finds admins

    // check if admin already exists
    if (admin.length > 1) {
        return res.status(500).send("Admin already exists, no more admins can be created");
    }

    // create admin
    const newAdmin = await Admin.create({ email, password, name });
    res.status(201).json({ msg: "Admin Created Successfully", admin: newAdmin });

});

export default router;