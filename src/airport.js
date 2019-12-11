module.exports = class Airport {
  constructor(capacity = 10) {
    this._planes = [];
    this._capacity = capacity;
  }

  get planes() {
    return this._planes;
  }

  land(plane) {
    if (plane.isLanded) {
      throw new Error("Plane has already landed.");
    }

    if (this._isFull()) {
      throw new Error("Airport is full.");
    }

    this._planes.push(plane);
    plane.isLanded = true;
    return plane;
  }

  takeoff(planeId) {
    const takenOffPlane = this._planes.filter(plane => plane.id === planeId)[0];

    if (!takenOffPlane) {
      throw new Error("Plane is not in airport.");
    }

    this._planes = this._planes.filter(plane => plane != takenOffPlane);
    takenOffPlane.isLanded = false;
    return takenOffPlane;
  }

  _isFull() {
    return this.planes.length === this._capacity;
  }
};
