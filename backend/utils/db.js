const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB Server Connected");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDB;
