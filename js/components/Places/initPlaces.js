import CardList    from './CardList.js';
import Card        from './Card.js';
import AddCardForm from './AddCardForm.js';

/**
 * @param cardsData
 * @param {Popup} popup
 */
const initPlaces = function(cardsData, popup) {

  const cardList = new CardList(
      document.querySelector('.places-list'),
      cardsData.map(item => new Card(item)),
  );
  /**
   * @param {Card} card
   */
  cardList.onCardSelected = (card) => {
    const popupImage = document.querySelector('#big-size-image .popup__image');
    popupImage.src = card.placeDto.link;
    popup.open(document.getElementById('big-size-image'));
  };
  cardList.render();

  const addCardElem = document.querySelector('#add-card');
  const addCardForm = new AddCardForm(addCardElem);
  addCardForm.onSubmit = placeDto => {
    popup.close();
    cardList.addCard(new Card(placeDto));
  };

  document.querySelector('.user-info__button')
          .addEventListener('click', () => {
            addCardForm.reset();
            popup.open(addCardElem);
          });

};

export default initPlaces;