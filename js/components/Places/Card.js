class Card {
  static #lastId = 0;
  #id;
  #liked = false;
  #placeDto;
  #cardElem;

  constructor(placeDto) {
    this.#id = ++Card.#lastId;
    this.#placeDto = placeDto;
  }

  get placeDto() {
    return this.#placeDto;
  }

  get id() {
    return this.#id;
  }

  like() {
    this.#liked = true;
    this.#cardElem.querySelector('.place-card__like-icon')
        .classList.toggle('place-card__like-icon_liked');
  }

  remove() {
    this.#cardElem.parentElement.removeChild(this.#cardElem);
  }

  /**
   * @returns {HTMLElement}
   */
  create() {
    const oneCard = document.createElement('div');
    oneCard.setAttribute('data-id', this.#id);
    oneCard.classList.add('place-card');

    const imgCard = document.createElement('div');
    imgCard.classList.add('place-card__image');
    imgCard.style.backgroundImage = `url(${this.#placeDto.link})`;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('place-card__delete-icon');

    const descCard = document.createElement('div');
    descCard.classList.add('place-card__description');

    const h3Card = document.createElement('h3');
    h3Card.classList.add('place-card__name');
    h3Card.textContent = this.#placeDto.name;

    const btnLike = document.createElement('button');
    btnLike.classList.add('place-card__like-icon');
    if (this.#liked) {
      btnLike.classList.toggle('place-card__like-icon_liked');
    }

    oneCard.appendChild(imgCard);
    imgCard.appendChild(btnDelete);
    oneCard.appendChild(descCard);
    descCard.appendChild(h3Card);
    descCard.appendChild(btnLike);

    this.#cardElem = oneCard;

    return oneCard;
  }
}

export default Card;