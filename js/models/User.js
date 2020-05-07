class User {
  _name;
  _job;

  /**
   * @param {String} name
   * @param {String} job
   */
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  get job() {
    return this._job;
  }

  get name() {
    return this._name;
  }
}

export default User;