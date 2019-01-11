const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./users");

// Book routes
router.route("/items", itemRoutes);
router.route("/users", userRoutes);

module.exports = router;
