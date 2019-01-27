const router = require("express").Router();
const userRoutes = require("./users");
const empRoutes = require("./employees");

// Book routes
router.use("/login", userRoutes);
router.use("/lookup", userRoutes);
router.use("/credit", userRoutes);
router.use("/employees", empRoutes);

module.exports = router;
