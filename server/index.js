const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 4000;
const app = express();

app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../pubic/index.html')));

// app.get('/', )
app.listen(PORT, () => console.log(`Listening on ${PORT}`));