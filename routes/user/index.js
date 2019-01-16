const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.route("/login", userRoutes);

module.exports = router;
