import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const isLoggedIn = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash("Error", "Login First");
        return res.redirect('/');
    }

    try {
        // Verify the token
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_TOKEN);
        // Check if the user is active and removes password
        const user = await User.findOne({ email: decoded.email }).select("-password");
        req.user = user;

        next();
    } catch (error) {
        req.flash("Error", "Invalid Token");
        return res.redirect('/');
    }
}

export default isLoggedIn;