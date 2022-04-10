class WalkModel {
  constructor(id, date, distance) {
    this.id = id;
    this.date = date;
    this.distance = distance;
  }
}

export default WalkModel;

export const initForm = new WalkModel(null, null, null);