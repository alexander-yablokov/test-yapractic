import Profile         from './Profile.js';
import EditProfileForm from './EditProfileForm.js';

/**
 * @param {User} user
 * @param {Popup} popup
 */
const initProfile = function(user, popup) {

  const profile = new Profile();
  profile.user = user;
  profile.render();

  const profileElem = document.querySelector('#profile');
  const editProfileForm = new EditProfileForm(profileElem);
  editProfileForm.onSubmit = (updatedUser) => {
    user = updatedUser;
    profile.user = user;
    profile.render();
    popup.close();
  };

  document.querySelector('.button.user-info__edit')
          .addEventListener(
              'click',
              () => {
                editProfileForm.user = user;
                popup.open(profileElem);
              });
};

export default initProfile;