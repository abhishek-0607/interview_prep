const mysql = require("mysql2");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql@2244",
    database: "edureka",
    multipleStatements:true
})
module.exports = mysqlConnection