const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
    const events = await Event.find().populate('attendees');
    res.json(events);
});

// Create an event
router.post('/', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
});

// Update an event
router.put('/:id', async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
});

// Delete an event
router.delete('/:id', async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
