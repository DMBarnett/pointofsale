const router = require("express").Router();
const itemRoutes = require("./items");
const categoryRoutes = require("./categories");
const managerRoutes = require("./manager");
const historyRoutes = require("./history");
const inventoryRoutes = require("./inventory");
const customerRoutes = require("./customer");
const setRoutes = require("./set");

// Book routes
router.use("/items", itemRoutes);
router.use("/categories", categoryRoutes)
router.use("/manager", managerRoutes)
router.use("/history", historyRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/customer", customerRoutes)
router.use("/set", setRoutes)

module.exports = router;
