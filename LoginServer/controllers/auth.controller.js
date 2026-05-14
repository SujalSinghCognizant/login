const userSchema = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.authControllerLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Error While getting data" });
    }
    const user = await userSchema.findOne({ email: email });
    if (!user)
      return res.status(400).json({ message: "Email or password is mismatch" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" },
      );
      return res
        .cookie("token", token)
        .status(200)
        .json({ message: "Login Succesfull" });
    }
    return res.status(400).json({ message: "Password didn't matach" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
exports.authControllerSignUp = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Error While getting data" });
    }
    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hash = await bcrypt.hash(password, 10);
    await userSchema.create({
      email: email,
      password: hash,
    });
    return res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server Error", err: err.message });
  }
};
