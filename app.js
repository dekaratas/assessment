require('dotenv').config();
const express = require("express");
const dbConnection = require("./db/connection");
const app = express();
const router = require("./router.js");
const PORT = 3000;

app.use(express.json());

dbConnection();
app.use(router);

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});