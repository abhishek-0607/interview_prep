const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
// userSchema.methods.checkPassword = function (password) {
//   return new Promise(function (resolve, reject) {
//     bcrypt.compare(password, this.password, function (err, same) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(same);
//       }
//     });
//   });
// };
const User = model("user", userSchema);
module.exports = User;
