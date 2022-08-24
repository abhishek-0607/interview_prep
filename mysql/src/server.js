const app = require("./app.js")
const mysqlConnection = require("./configs/mysql")

mysqlConnection.connect((err) => {
    if(!err){
        console.log("Connected!!!")
    }
    else {
        console.log(err)
        console.log("Connection Failed")
    }
})



app.listen(3000, () => {
    console.log("Express server is running at PORT 3000")
})