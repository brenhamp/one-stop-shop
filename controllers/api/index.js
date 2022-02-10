const router = require("express").Router();
const departmentRoutes = require("./department-routes");
const cartRoutes = require("./cart-routes");

router.use("/department", departmentRoutes);
router.use("/cart", cartRoutes);

module.exports = router;