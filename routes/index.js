const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const tcgRoutes = require("./tcg");


router.use("/api", apiRoutes);
router.use("/user", userRoutes)
router.use("/tcg", tcgRoutes)

router.use((req, res) =>{
  res.sendFile(path.join(__dirname, "../client/public/index.html"))
})

module.exports = router;