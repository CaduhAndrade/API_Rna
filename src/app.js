const express = require('express');
const cors = require('cors');

const indexApp = require('./routes/index');
const proteinRoutes = require('./routes/protein.routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(indexApp);
app.use('/', proteinRoutes);

module.exports = app;
