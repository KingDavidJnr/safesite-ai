const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/index.route");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use your routes
app.use("/v1", routes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to SafeSite-AI Backend Services");
});

app.listen(PORT, () => {
  console.log(`SafeSite backend running on port ${PORT}`);
});
