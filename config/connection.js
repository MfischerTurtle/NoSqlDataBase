const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetworkHW",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// This to log mongo queries.
mongoose.set("debug", true);

module.exports = mongoose.connection;