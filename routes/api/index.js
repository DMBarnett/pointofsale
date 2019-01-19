const router = require("express").Router();
const itemRoutes = require("./items");
const categoryRoutes = require("./categories");

// Book routes
router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes)

module.exports = router;
