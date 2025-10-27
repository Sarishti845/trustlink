// const express = require('express');
// const ProviderProfile = require('../models/ProviderProfile.js');

// const router = express.Router();

// // @desc    Fetch all provider profiles
// // @route   GET /api/providers
// router.get('/', async (req, res) => {
//   try {
//     // Find all profiles and populate the user's name and email
//     const profiles = await ProviderProfile.find({}).populate('user', 'name email isVerified');
//     res.json(profiles);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;
const express = require('express');
const ProviderProfile = require('../models/ProviderProfile.js');

const router = express.Router();

// GET all provider profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await ProviderProfile.find({}).populate('user', 'name email isVerified');
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// --- NEW CODE: GET a single provider profile by ID ---
// @desc    Fetch a single provider profile
// @route   GET /api/providers/:id
router.get('/:id', async (req, res) => {
  try {
    const profile = await ProviderProfile.findById(req.params.id).populate('user', 'name email isVerified');

    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Provider not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;