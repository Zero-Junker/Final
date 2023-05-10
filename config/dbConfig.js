const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://zmjunker:iXiQ5fLbCNs6EbaX@testdatabase.9y8fjbx.mongodb.net/",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;