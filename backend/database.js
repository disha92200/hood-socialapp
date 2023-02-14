const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/socialDB");
  var db = mongoose.connection;
  db.on("open", () => {
    console.log("Connected to the MongoDB database.");
  });
};
module.exports = dbConnect;
