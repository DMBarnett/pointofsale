const router = require("express").Router();
const itemRoutes = require("./items");

// Book routes
router.route("./items", itemRoutes);

module.exports = router;
