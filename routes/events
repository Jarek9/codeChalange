const express = require ('express');
const router = express.Router();
const Event = require('../models/Event');
const eventController = require('../contoller/event-controller');
module.exports = router;

//GET LIST OF ALL EVENTS
router.get('/', eventController.getEvents);

//GET A SINGLE EVENT BY ID
router.get('/:eventId', eventController.getEventById);

//ADD NEW EVENT
router.post('/', eventController.addNewEvent);

//UPDATE EVENT BY ID
router.put('/:eventId', eventController.updateEvent);

//SEARCH EVENT BY venueName
router.get('/search/:key', eventController.searchEventByVenueName);

//DELETE EVENT BY ID
router.delete('/:eventId', eventController.deleteEventById);

