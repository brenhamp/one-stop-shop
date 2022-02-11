const router = require("express").Router();
const departmentRoutes = require("./department-routes");
const cartRoutes = require("./cart-routes");
const userRoutes = require("./user-routes");

router.use("/department", departmentRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);

module.exports = router;