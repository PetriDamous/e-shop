// import mongoose from "mongoose";

import { connect } from "mongoose";
const mongoose = require("mongoose");

// console.log(mongoose);

console.log(process.env.MONGO_SRV);

const connection = {};

// Connection options for mongoose.connect
// No longer needed as of mongoose 6.0
connection.options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDB() {
  try {
    if (connection.isConnected) {
      // Use existing database connection
      console.log("Using existing connection");
      return;
    }

    // Use new database connection
    const db = await mongoose.connect(process.env.MONGO_SRV);

    console.log("DB Connected");

    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.log(e.message);
  }
}

export default connectDB;
