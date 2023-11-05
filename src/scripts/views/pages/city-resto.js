import RestaurantSource from '../../data/resto-db';
import { CityRestoPage } from '../templates/daftar-resto';

const menurestaurant = {
  async render() {
    return `
      <div class="content">
        <h3 class="title">All List City Resto</h3>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#movies');

    // eslint-disable-next-line no-shadow
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += CityRestoPage(restaurant);
    });
  },
};

export default menurestaurant;
