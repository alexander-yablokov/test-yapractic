class Popup {
  /**
   * @type {Element}
   */
  #element;

  /**
   * @param {Element} element
   */
  open(element) {
    this.#element = element;
    this.#element.querySelector('.popup__close').onclick = () => this.close();
    this.#element.classList.toggle('popup_is-opened');
  }

  close() {
    this.#element.classList.toggle('popup_is-opened');
  }
}

export default Popup;