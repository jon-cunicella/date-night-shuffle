const express = require('express');
const router = express.Router();

const PlaceController = require('../controllers/place-controller');

// Add Place
router.post('/', PlaceController.addPlace);

/* GET Places. */
router.get('/', PlaceController.getPlaces);

/* GET Place. */
router.get('/:id', PlaceController.getPlace);

// Update Place
router.put('/:id', PlaceController.updatePlace);

// Delete Place
router.delete('/:id', PlaceController.deletePlace);

module.exports = router;
