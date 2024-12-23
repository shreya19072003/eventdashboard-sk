const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    deadline: Date,
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
    attendee: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }
});

module.exports = mongoose.model('Task', taskSchema);
