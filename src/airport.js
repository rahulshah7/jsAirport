module.exports = class Airport {
  constructor() {
    this._planes = [];
  }

  get planes() {
    return this._planes;
  }

  land(plane) {
    this._planes.push(plane);
    return plane;
  }

  takeoff(planeId) {
    const takenOffPlane = this._planes.filter(plane => plane.id === planeId)[0];
    this._planes = this._planes.filter(plane => plane != takenOffPlane);
    return takenOffPlane;
  }
};
