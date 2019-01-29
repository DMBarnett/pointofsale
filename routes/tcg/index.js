const router = require("express").Router();
const cardSearch = require("./cardSearch");
const setSearch = require("./setSearch");
const priceUpdate = require("./priceUpdate");

router.use("/cardSearch", cardSearch);
router.use("/setSearch", setSearch);
router.use("/priceUpdate", priceUpdate);

module.exports = router;