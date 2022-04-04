const Event = require('../models/Event');

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch(err) {
        res.status(404).json({message: "No events found"});
    }
};

const getEventById = async (req, res) => {
    try {
        const events = await Event.findById(req.params.eventId);
        res.status(200).json(events);
    } catch(err) {
        res.status(404).json({message: "event with id " + req.params.eventId + " has been not found"});
    }
};

const addNewEvent = async (req, res) => {
    const event = new Event({
        venueName: req.body.venueName,
        eventDate: req.body.eventDate,
        ownerContact: req.body.ownerContact,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });

    try {
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(500).json({message: "Unable to add event to data base"});
    }
};

const updateEvent = async (req, res) => {
    try {
    const updatedEvent = await Event.updateOne({_id: req.params.eventId}, {$set: req.body});
    res.status(200).json(updatedEvent); //Wiem, że tu powinno być 204.
} catch (err) {
    res.status(500).json({message: "Unable to update event"});
    }
};

const searchEventByVenueName = async (req, res) => {
    const searchedEvent = await Event.find(
        {
            "$or":[
                {venueName: {$regex:req.params.key}}
            ]
        }
    )
    if (searchedEvent == undefined || searchedEvent == "" || searchedEvent.length == 0) {
        res.status(404).json({message: "Event with venueName " + req.params.key+ " has been not found"});
    } else {
        res.status(200).json(searchedEvent);
    }
};

const deleteEventById = async (req, res) => {
    try {
    const removedEvent = await Event.deleteOne({_id: req.params.eventId});
    res.status(200).json(removedEvent);
} catch (err) {
    res.status(500).json({message: "Unable to delete event with id " + req.params.eventId});
    }
};

exports.getEvents = getEvents;
exports.getEventById = getEventById;
exports.addNewEvent = addNewEvent;
exports.updateEvent = updateEvent;
exports.searchEventByVenueName = searchEventByVenueName;
exports.deleteEventById = deleteEventById;
