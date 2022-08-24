const express = require("express");
const mysqlConnection = require("../configs/mysql");
const router = express.Router();

router.get("/", (req, res) => {
    mysqlConnection.query("select * from people", (err, rows, fields) => {
        if (!err) {
            res.status(200).send(rows);
        } else {
            console.log(err);
        }
    })
})

module.exports = router;