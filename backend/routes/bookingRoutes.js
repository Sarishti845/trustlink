const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking.js');
const { protect } = require('../middleware/authMiddleware.js');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private (requires token)
// @desc    Get logged in user's bookings
// @route   GET /api/bookings/mybookings
// @access  Private

router.post('/', protect, async (req, res) => {
  try {
    const { provider, bookingDate, bookingTime, totalCost } = req.body;

    const booking = new Booking({
      provider,
      customer: req.user._id, // Get customer ID from the 'protect' middleware
      bookingDate,
      bookingTime,
      totalCost,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;