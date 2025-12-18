import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ username, email, password, loggedIn: false });
        res.status(201).json({ message: "User registered successfully", user: { id: user._id, email: user.email, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        user.loggedIn = true;
        await user.save();
        res.status(200).json({ message: "User logged in successfully", user: { id: user._id, email: user.email, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

const logoutUser = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        user.loggedIn = false;
        await user.save();
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export { registerUser, loginUser, logoutUser };