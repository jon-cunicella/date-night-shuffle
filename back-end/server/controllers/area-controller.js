const Area = require("../models/area-model");
const Place = require("../models/place-model");

class AreaController {
  //get Areas
  static async getAreas(req, res, next) {
    res.send(await Area.find());
  }
  //get Area
  static async getArea(req, res) {
    const id = req.params.id;

    res.send(await Area.findOne({ _id: id }).populate("places"));
  }



  // Get Random Place from Area

  static async getRandomPlace(req, res, next) {
    const id = req.params.id;
    const area = await Area.findOne({ _id: id }).populate("places");
    const randomIndex = Math.floor(Math.random() * area.places.length);
    res.send(await area.places[randomIndex]);
  }

  //add Area
  static async addArea(req, res, next) {
    const name = req.body.name;

    Area.create({
      name: name
    });

    res.send(await Area.find());
  }

  //Update an Album
  static async updateArea(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
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

    res.send(await Area.remove({ _id: id }));
  }

  /// Add Place to area
  static async addPlaces(req, res) {
    const id = req.params.id;
    const placesToAdd = req.body;

    const areaToUpdate = await Area.findById({ _id: id });
    placesToAdd.forEach(place => {
      areaToUpdate.places.push(place);
    });
    areaToUpdate.save(areaToUpdate);

    res.send(await areaToUpdate);
  }
}

module.exports = AreaController;
