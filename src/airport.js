module.exports = class Airport {
  constructor() {
    this._planes = [];
  }

  get planes() {
    return this._planes;
  }

  land(plane) {
    this._planes.push(plane);
  }
};
