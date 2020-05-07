import User  from './models/User.js';
import Popup from './ui/Popup.js';

import placesData from './fixtures/initialPlacesData.js';

import initProfile from './components/Profile/initProfile.js';
import initPlaces  from './components/Places/initPlaces.js';

let user = new User('Jaques Causteau', 'Sailor, Researcher');
const popup = new Popup();

initProfile(user, popup);
initPlaces(placesData, popup);
