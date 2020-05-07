import {validateLengthStr} from '../../utils/validation.js';
import User                from '../../models/User.js';
import Form                from '../../ui/Form.js';
import {setSubmitState}    from '../../ui/formMixins.js';

class EditProfileForm extends Form {
  initListeners() {
    this._form.querySelectorAll('input').forEach(elem => {
      elem.addEventListener('input', () => this.validate());
    });
  }

  validate() {
    const isOk = this.validName() & this.validJob();
    this.setSubmitState(isOk > 0);
  }

  validJob() {
    const formProfileJob = this._form.elements.job;
    const formErrorProfileJob = this._form.querySelector('#error-profile-job');
    switch (validateLengthStr(formProfileJob.value, 2, 30)) {
      case 0:
        formErrorProfileJob.textContent = 'Это обязательное поле';
        return false;
      default:
      case 1:
        formErrorProfileJob.textContent = '';
        return true;
      case 2:
        formErrorProfileJob.textContent = 'Должно быть от 2 до 30 символов';
        return false;
    }
  }

  validName() {
    const formProfileName = this._form.elements.name;
    const formErrorProfileName = this._form.querySelector('#error-profile-name');
    switch (validateLengthStr(formProfileName.value, 2, 30)) {
      case 0:
        formErrorProfileName.textContent = 'Это обязательное поле';
        return false;
      default:
      case 1:
        formErrorProfileName.textContent = '';
        return true;
      case 2:
        formErrorProfileName.textContent = 'Должно быть от 2 до 30 символов';
        return false;
    }
  }

  /**
   * @param {User} user
   */
  set user(user) {
    this._form.elements.name.value = user.name;
    this._form.elements.job.value = user.job;
    this.validate();
  }

  getSubmitData() {
    return new User(
        this._form.elements.name.value,
        this._form.elements.job.value,
    );
  }
}

Object.assign(EditProfileForm.prototype, {setSubmitState: setSubmitState});

export default EditProfileForm;