import {validURL, validateLengthStr} from '../../utils/validation.js';
import Form                          from '../../ui/Form.js';
import {setSubmitState}              from '../../ui/formMixins.js';

class AddCardForm extends Form {

  initListeners() {
    this._form.querySelectorAll('input').forEach(elem => {
      elem.addEventListener('input', () => this.validate());
    });
  }

  validate() {
    const isOk = this.validName() & this.validLink();
    this.setSubmitState(isOk > 0);
  }

  validLink() {
    const formNewLink = this._form.elements.link;
    const formErrorCardLink = this._form.querySelector('#error-card-link');
    if (validURL(formNewLink.value)) {
      formErrorCardLink.textContent = '';
      return true;
    } else {
      formErrorCardLink.textContent = 'Здесь должна быть ссылка';
      return false;
    }
  }

  validName() {
    const formNewName = this._form.elements.name;
    const formErrorCardName = this._form.querySelector('#error-card-name');
    switch (validateLengthStr(formNewName.value, 2, 30)) {
      case 0:
        formErrorCardName.textContent = 'Это обязательное поле';
        return false;
      default:
      case 1:
        formErrorCardName.textContent = '';
        return true;
      case 2:
        formErrorCardName.textContent = 'Должно быть от 2 до 30 символов';
        return false;
    }
  }

  getSubmitData() {
    return {
      name: this._form.elements.name.value,
      link: this._form.elements.link.value,
    };
  }
}

Object.assign(AddCardForm.prototype, {setSubmitState: setSubmitState});

export default AddCardForm;