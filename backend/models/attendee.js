const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Attendee', attendeeSchema);
