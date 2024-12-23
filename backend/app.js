const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/event_dashboard', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/events', require('./routes/events'));
// Add routes for attendees and tasks similarly

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
