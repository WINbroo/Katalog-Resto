import CONFIG from '../../globals/config';

const RestoDetailPage = (restaurant) => `
  <div class="page-contain">
    <div class="detail-restaurant">
      <div class="card">
        <div class="image">
          <img
            src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
            alt="${restaurant.name}"
            class="w-100-auto"
            tabindex="0">
        </div>

        <div class="list-content">
          <div class="list" tabindex="0">Rating : ${restaurant.rating}
          </div>
          <div href="#" class="list" tabindex="0">Lokasi : ${restaurant.city}
          </div>
          <div class="list" tabindex="0">Categori Food : ${restaurant.categories.map((category) => category.name)}
          </div ></br>
            <h2 class="title" tabindex="0">${restaurant.name}</h2></br>
            <p class="Justify" tabindex="0">${restaurant.description}
            </p></br></br>

          <div class="menu-title">
              <h2>Available Menu</h2>
          </div>
          <div href="#" class="list">
            <div class="menu">
            <h3>Foods</h3>
            <ul>
              ${restaurant.menus.foods.map((menu) => `<li><span>${menu.name}</li>`).join('')}</span></li>
            </ul>
            </div>
          </div>
          <div href="#" class="list">
            <div class="menu">
            <h3>Drinks</h3>
            <ul>
            ${restaurant.menus.drinks.map((menu) => `<li><span>${menu.name}</li>`).join('')}</span></li>
            </ul>
            </div>
          </div>

          <div class="user">
            <div class="user-head">
              <h2>Customer reviews</h2>
            </div>
            <div class="user-content">
              ${restaurant.customerReviews.map((review) => `
                <div class="user-card">
                  <div class="user-card2">
                    <div>
                      <div class="user-profile">
                        <img src="./hero-image_2.jpg" alt="">
                      </div>
                      <div class="user-reviews">
                        <strong>${review.name}</strong>
                        <span>${review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div class="user-reviews">
                    <p>${review.review}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div >
      </div >
    </div >
  </div >
  `;

const CityRestoPage = (restaurant) => `
  <li class="invisible">
  <div class="card black">
    <div class="image">
      <img
        src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
        alt="${restaurant.name}"
        class="w-100"
        tabindex="0"
      >
    </div>
    <div class="list-content">
        <div href="#" class="list" tabindex="0">Rating : ${restaurant.rating}
        </div>
        <div href="#" class="list" tabindex="0">Kota : ${restaurant.city}
        </div>
      </br>
      <h3 class="title" tabindex="0">
        <a class="animasi black" href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
    </div>
  </div>
  </ >
`;

const Buttonlike = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const NoButtonlike = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestoDetailPage,
  CityRestoPage,
  Buttonlike,
  NoButtonlike,
};
