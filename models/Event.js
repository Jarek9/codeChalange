const mongoose = require ('mongoose');

const EventSchema = mongoose.Schema({
    venueName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        default: Date.now
    },
    ownerContact: {
        email: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
    },
});

module.exports = mongoose.model('Event', EventSchema);