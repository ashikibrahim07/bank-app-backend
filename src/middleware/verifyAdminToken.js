const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No Token Provided." });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or Expired Token." });
    }

    // Check admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access Denied. Admins Only." });
    }

    // Attach user info to request for further use
    req.user = decoded;
    next();
  });
};

module.exports = verifyAdminToken;
