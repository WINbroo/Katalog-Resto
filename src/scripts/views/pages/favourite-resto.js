import DatabaseFavorite from '../../data/database-resto';
import { CityRestoPage } from '../templates/daftar-resto';

const favoriterestaurant = {
  async render() {
    return `
      <div class="content">
        <h3 class="title">Your Favourite Resto</h3>
        <div id="movies" class="list-restaurant"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DatabaseFavorite.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CityRestoPage(restaurant);
    });
  },
};

export default favoriterestaurant;
