const express = require("express");
const app = express();

const envMessage = process.env.MESSAGE || 'from dev message';
const message = 'very good job';

app.get('/', (req, res) => {
  res.json({envMessage, message});
});

module.exports = app;