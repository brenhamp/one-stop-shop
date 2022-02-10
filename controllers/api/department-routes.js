const router = require("express").Router();
const { Department, Product } = require("../../models");

//show all departments and products
router.get("/", (req, res) => {
    Department.findAll({
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'product_description', 'department_id'],
            },
        ],
    })
    .then((dbDepartmentData) => res.json(dbDepartmentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

//get one department and its products
router.get("/:id", (req, res) => {
    Department.findOne({
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'product_description', 'department_id'],
            },
        ],
    })
    .then((dbDepartmentData) => {
        if(!dbDepartmentData) {
            res.status(404).json({ message: "No department found with this ID"});
            return;
        }
        res.json(dbDepartmentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;