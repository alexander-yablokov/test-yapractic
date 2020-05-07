class Profile {
  /**
   * @type {User}
   */
  _user;

  set user(value) {
    this._user = value;
  }

  render() {
    const userInfoName = document.querySelector('.user-info__name');
    userInfoName.textContent = this._user.name;
    const userInfoJob = document.querySelector('.user-info__job');
    userInfoJob.textContent = this._user.job;
  }
}

export default Profile;