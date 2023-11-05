import DatabaseFavorite from '../data/database-resto';
import { Buttonlike, NoButtonlike } from '../views/templates/daftar-resto';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await DatabaseFavorite.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = Buttonlike();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await DatabaseFavorite.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = NoButtonlike();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await DatabaseFavorite.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
