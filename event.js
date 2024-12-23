import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventManagement = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ name: '', description: '', location: '', date: '' });

    useEffect(() => {
        axios.get('/api/events').then((res) => setEvents(res.data));
    }, []);

    const handleAddEvent = () => {
        axios.post('/api/events', newEvent).then((res) => setEvents([...events, res.data]));
    };

    return (
        <div>
            <h1>Event Management</h1>
            <div>
                <input type="text" placeholder="Name" onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
                <input type="text" placeholder="Description" onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} />
                <input type="text" placeholder="Location" onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
                <input type="date" onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>
                        {event.name} - {event.location} - {new Date(event.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventManagement;
