const Area = require("../models/area-model");
const Place = require("../models/place-model");

class AreaController {
  //get Areas
  static async getAreas(req, res, next) {
    res.json(await Area.find());
  }
  //get Area
  static async getArea(req, res) {
    const id = req.params.id;

    res.json(await Area.findOne({ _id: id }).populate("places"));
  }

  // Get Random Place from Area

  static async getRandomPlace(req, res, next) {
    const id = req.params.id;
    const area = await Area.findOne({ _id: id }).populate("places");
    const randomIndex = Math.floor(Math.random() * area.places.length);
    res.json(await area.places[randomIndex]);
  }

  //add Area
  static async addArea(req, res, next) {
    const name = req.body.name;

    Area.create({
      name: name
    });

    res.json(await Area.find());
  }

  //Update an Area
  static async updateArea(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.json(
      await Area.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  //Delete an Area
  static async deleteArea(req, res) {
    const id = req.params.id;

    res.json(await Area.remove({ _id: id }));
  }

  /// Add Place to area
  static async addPlaces(req, res) {
    const id = req.params.id;
    const placesToAdd = req.body;

    const areaToUpdate = await Area.findOne({ _id: id });
    placesToAdd.forEach(place => {
      areaToUpdate.places.push(place);
    });
    areaToUpdate.save(areaToUpdate);

    res.json(await areaToUpdate);
  }
}

module.exports = AreaController;
