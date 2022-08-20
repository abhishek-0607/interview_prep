const app = require("./app");
const connect = require("./configs/db");

app.listen(8080, async () => {
  await connect();
  console.log("Listening to PORT 8080");
});
