import User from "../models/user.js";
import bcrypt from "bcrypt";
import generateToken from '../utils/generatesToken.js'

const register = async (req, res) => {
    const { fullname, email, password } = req.body;

    // check if email already exists in the database  
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "Email already exists" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        // validation
        if (error) throw error;

        // Create a new user
        const newUser = await User.create({ fullname, email, password: hashed });

        // token creation
        const token = generateToken(newUser);

        // Send token in response and saving
        res.cookie("token", token, {
            httpOnly: true,
            expiresIn: "1hr",
            sameSite: "Strict"
        });
        res.status(201).json({ msg: "User Created Successfully", user: newUser });

    } catch (err) {
        res.status(500).json({ msg: "Error creating user", error: err });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }); // finds user
        if (!user) { // if user is not found
            return res.status(400).json({ message: "User not found", success: false });
        } else {
            // comparing password
            const checkPassword = await bcrypt.compare(password, user.password);
            if (!checkPassword) {
                return res.status(400).json({ message: "Something went wrong", success: false });
            }

            // token creation
            const token = generateToken(user);
            // Send token in response and saving 
            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "Strict"
            })
        }
        res.status(200).json({ message: "Login successful", success: true, user });

    } catch (err) {
        res.status(500).json({ msg: "Error logging in", error: err });
    }
}

export { register, login };