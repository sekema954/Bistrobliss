const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {type: String, required: true },
    phoneNumber: { type: String, required: true},
    date: { type: String, required: true},
    time: { type: String, required: true },
    guests: { type:String, required: true},
}, {timestamps: true });

const table_bookings = mongoose.model('Booking', bookingSchema, "BlissBookings");

module.exports = table_bookings;