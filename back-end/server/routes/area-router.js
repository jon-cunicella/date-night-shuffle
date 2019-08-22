const express = require("express");
const router = express.Router();

const AreaController = require("../controllers/area-controller");

// Add Area
router.post("/", AreaController.addArea);

// GET Areas
router.get("/", AreaController.getAreas);

//  GET Area
router.get("/:id", AreaController.getArea);

// Get Area then Random Place
router.get("/:id/places/random", AreaController.getRandomPlace);

// Update Area
router.put("/:id", AreaController.updateArea);

// Delete Area
router.delete("/:id", AreaController.deleteArea);

// Add Place to Area
router.put("/:id/addPlaces", AreaController.addPlaces);

module.exports = router;
