const express = require('express');
const { createEvent, getAllEvents, deleteById, updateEvent } = require('../controllers/eventsController.js');

const router = express.Router();

router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.delete('/events/:id', deleteById);
router.put('/events/:id', updateEvent)

module.exports = router;