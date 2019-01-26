const router = require("express").Router();
const cardSearch = require("./cardSearch");

router.use("/cardSearch", cardSearch);

module.exports = router;