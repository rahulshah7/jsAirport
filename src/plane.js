module.exports = class Plane {
  constructor(id) {
    this._id = id;
    this._isLanded;
  }

  get id() {
    return this._id;
  }

  get isLanded() {
    return this._isLanded;
  }

  set isLanded(bool) {
    this._isLanded = bool;
  }
};
