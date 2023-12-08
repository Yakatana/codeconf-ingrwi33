/* 
person-info = card
person-info__text = card__id
person-info__name = card__id-names
person-info__location = card__city
person-info__avatar = card__thumbnail
person-info__offline = card__offline
person-info__offline-title = card__offline-title
person-info__offline-text = card__offline-text
person-info__details = card__info
person-info__details-time = card__info-time
person-info__details-cta = card__info-cta
 */

let cards = document.querySelectorAll('.person-info');

cards.forEach((card) => {
  card.addEventListener('click', function () {
    this.classList.toggle('person-info-active');

    let location = this.querySelector('.person-info__location');
    if (location) location.classList.toggle('person-info-active__location');

    let text = this.querySelector('.person-info__text');
    if (text) text.classList.toggle('person-info-active__text');

    let names = this.querySelectorAll('.person-info__name');
    if (names) {
      names.forEach((name) => {
        name.classList.toggle('person-info-active__name');
      });
    }

    let avatars = this.querySelectorAll('.person-info__avatar');
    if (avatars) {
      avatars.forEach((avatar) => {
        avatar.classList.toggle('person-info-active__avatar');
      });
    }

    let offline = this.querySelector('.person-info__offline');
    if (offline) offline.classList.toggle('person-info-active__offline');

    let offlineTitle = this.querySelector('.person-info__offline-title');
    if (offlineTitle) offlineTitle.classList.toggle('person-info-active__offline-title');

    let offlineText = this.querySelector('.person-info__offline-text');
    if (offlineText) offlineText.classList.toggle('person-info-active__offline-text');

    let details = this.querySelector('.person-info__details');
    if (details) details.classList.toggle('person-info-active__details');

    let detailsTime = this.querySelector('.person-info__details-time');
    if (detailsTime) detailsTime.classList.toggle('person-info-active__details-time');

    let detailsCta = this.querySelector('.person-info__details-cta');
    if (detailsCta) detailsCta.classList.toggle('person-info-active__details-cta');
  });
});
