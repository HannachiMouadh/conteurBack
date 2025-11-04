const express = require("express");
const dotenv = require("dotenv");
const sensorRoutes = require("./routes/sensorRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// Use /sensor prefix
app.use("/sensor", sensorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

