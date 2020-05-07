class CardList {
  /**
   * @type {Element}
   */
  #containerElem;
  /**
   * @type {Object}
   */
  #mapIdToCard;
  /**
   * @type {Function}
   */
  #onCardSelected;

  /**
   * @param {Function} value
   */
  set onCardSelected(value) {
    this.#onCardSelected = value;
  }

  /**
   * @param {Element} domContainer
   * @param {Array.<Card>} cards
   */
  constructor(domContainer, cards = []) {
    this.#containerElem = domContainer;
    this.#mapIdToCard =
        cards.reduce((accumulator, card) => {
          accumulator[card.id] = card;
          return accumulator;
        }, {});

    this.initListeners();
  }

  initListeners() {
    this.#containerElem.addEventListener('click', event => {
      const
          target = event.target,
          cardElem = target.closest('.place-card');
      if (!cardElem) {
        return;
      }

      const
          cardId = cardElem.getAttribute('data-id'),
          card = this.#mapIdToCard[cardId] || null;

      if (!card) {
        throw 'There is no card #' + cardId;
      }
      if (target.classList.contains('place-card__delete-icon')) {
        this.removeCard(card);
        return;
      }
      if (target.classList.contains('place-card__like-icon')) {
        card.like();
        return;
      }
      if (target.classList.contains('place-card__image')) {
        this.#onCardSelected && this.#onCardSelected(card);
      }
    });
  }

  /**
   * @param {Card} card
   */
  addCard(card) {
    this.#mapIdToCard[card.id] = card;
    this.#containerElem.appendChild(card.create());
  }

  render() {
    this.#containerElem.innerHTML = '';
    Object.keys(this.#mapIdToCard).forEach(cardId => {
      this.#containerElem.appendChild(this.#mapIdToCard[cardId].create());
    });
  }

  /**
   * @param {Card} card
   */
  removeCard(card) {
    card.remove();
    delete this.#mapIdToCard[card.id];
  }
}

export default CardList;