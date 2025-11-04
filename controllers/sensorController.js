const db = require("../config/db");

// Fetch last 100 sensor records
exports.getSensorData = (req, res) => {
  const query = "SELECT * FROM stats ORDER BY time DESC LIMIT 100";

  db.query(query, (err, results) => {
    if (err) {
  console.error("❌ Database query failed:", err.sqlMessage);
  return res.status(500).json({ error: err.sqlMessage });
    }
    console.log("✅ Data fetched:", results.length, "records");
    res.json(results); // must return JSON
  });
};

// Log new sensor data via GET (browser-friendly)
exports.logSensorData = (req, res) => {
  const temp = req.query.temp;
  const humid = req.query.humid;

  if (!temp || !humid) {
    return res.status(400).send("Missing temp or humid");
  }

  const query = "INSERT INTO stats (temp, humid) VALUES (?, ?)";
  db.query(query, [temp, humid], (err, result) => {
    if (err) return res.status(500).send("MySQL error: " + err.sqlMessage);

    res.send(`Data logged via GET: temp=${temp}, humid=${humid}`);
  });
};



