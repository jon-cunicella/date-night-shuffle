const Place = require('../models/place-model');

class PlaceController {
  //Get Places
  static async getPlaces(req, res, next) {
    res.send(await Place.find());
  }

  //Get Place
  static async getPlace(req, res) {
    const id = req.params.id;

    res.send(await Place.findOne({ _id: id }));
  }

  //Add Place
  static async addPlace(req, res, next) {
    const name = req.body.name;
    const price = req.body.price;

    Place.create({
      name: name,
      price: price
    });

    res.send(await Place.find());
  }

  //update Place
  static async updatePlace(req, res) {
    const id = req.params.id;
    const updates = req.body;

    let changes = {};
    let updateKey = {};

    for (updateKey of Object.keys(updates)) {
      changes[updateKey] = updates[updateKey];
    }

    res.send(
      await Place.findByIdAndUpdate(
        { _id: id },
        { $set: changes },
        { new: true }
      )
    );
  }

  //Delete a Place
  static async deletePlace(req, res) {
    const id = req.params.id;

    res.send(await Place.remove({ _id: id }));
  }
}

module.exports = PlaceController;
