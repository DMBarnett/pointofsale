const router = require("express").Router();
const itemRoutes = require("./items");
const categoryRoutes = require("./categories");
const managerRoutes = require("./manager");

// Book routes
router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes)
router.use("/manager", managerRoutes)

module.exports = router;
