import menurestaurant from '../views/pages/city-resto';
import favoriterestaurant from '../views/pages/favourite-resto';
import detailrestaurant from '../views/pages/detail-resto';

const routes = {
  '/': menurestaurant, // default page
  '/restaurant': menurestaurant,
  '/favorite': favoriterestaurant,
  '/detail/:id': detailrestaurant,
};

export default routes;
