import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-db';
import { RestoDetailPage } from '../templates/daftar-resto';
import LikeButtonInitiator from '../../utils/like-button-intiator';

const detailrestaurant = {
  async render() {
    return `
    <h3 class="title">Your Choice Resto</h3></br>
    <div id="movie" class="movie"></div>
    <div id="like-button" class="like-button"> </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detail(url.id);
    const restoContainer = document.querySelector('#movie');
    restoContainer.innerHTML = RestoDetailPage(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#like-button'),
      restaurant: {
        id: restaurants.id,
        pictureId: restaurants.pictureId,
        name: restaurants.name,
        description: restaurants.description,
        city: restaurants.city,
        rating: restaurants.rating,
      },
    });
  },
};

export default detailrestaurant;
