import jwt from "jsonwebtoken";
import "dotenv/config";

const JWT_TOKEN = process.env.JWT_TOKEN;

const generateToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            id: user._id
        },
        JWT_TOKEN,
        { expiresIn: "1hr" });
}

export default generateToken;