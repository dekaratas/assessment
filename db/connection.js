const mongoose = require("mongoose");

const dbConnection = async () => {
  const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/assessmentdb";
  try {
    await mongoose.connect(dbUri);
    console.log("Connection established");
  } catch (error) {
    console.log("Connection failed: ", error.message);
    process.exit(1);
  }
}

module.exports = dbConnection;