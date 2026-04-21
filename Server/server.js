const express = require('express');
const cors = require('cors');
const Sequelize = require("sequelize");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Servidor en 3000"));
