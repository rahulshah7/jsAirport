module.exports = class Plane {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
};
