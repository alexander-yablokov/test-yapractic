class Form {
  /**
   * @type {HTMLFormElement}
   */
  _form;
  /**
   * @type {Element}
   */
  #element;
  /**
   * @type {Function|null}
   */
  #onSubmit = null;

  constructor(element) {
    this.#element = element;
    this.#element.addEventListener('submit',
        /**
         * @param {Event} event
         */
        event => {
          event.preventDefault();
          this.#onSubmit && this.#onSubmit(this.getSubmitData());
        });

    this._form = element.querySelector('form');
    this.initListeners();
    this.validate();

  }

  set onSubmit(value) {
    this.#onSubmit = value;
  }

  getSubmitData() {
    throw 'Need implementation';
  }

  validate() {
    throw 'Need implementation';
  }

  initListeners() {
    throw 'Need implementation';
  }

  reset() {
    this._form.reset();
  }
}

export default Form;