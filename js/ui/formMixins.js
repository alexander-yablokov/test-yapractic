/**
 * @param {boolean} active
 */
export const setSubmitState = function(active) {
  const submitBtn = this._form.querySelector('.popup__button');
  if (active) {
    submitBtn.classList.add('popup__button_enable');
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.remove('popup__button_enable');
    submitBtn.disabled = true;
  }
};