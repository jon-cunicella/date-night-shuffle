const Area = require('../models/area-model');

class AreaController {
  //get Areas
  static async getAreas(req, res, next) {
    res.send(await Area.find());
  }
  //get Area
  static async getArea(req, res) {
    const id = req.params.id;

    res.send(await Area.findOne({ _id: id }).populate('places'));
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

    const areaToAdd = await Area.findById({ _id: id });
    placesToAdd.forEach(pl => {
      areaToAdd.places.push(place);
    });
    areaToAdd.save(areaToAdd);

    res.send(await areaToAdd);
  }
}

module.exports = AreaController;
