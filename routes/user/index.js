const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/login", userRoutes);
router.use("/lookup", userRoutes);
router.use("/credit", userRoutes);

module.exports = router;
