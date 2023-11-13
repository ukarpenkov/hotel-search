import './styles/index.scss'

import $ from "jquery"

import Chart from 'chart.js/auto';
import { counter } from './scripts/counter'
import { setSlider } from './scripts/slider'
import { changeVisibleElement } from './scripts/changeVisibleElement'
import { setCalendar } from './scripts/calendar'
import { chartData } from './scripts/chartSettings';


let counterButtons = document.querySelectorAll('.js-dropdown-counter__btn')
counterButtons.forEach(btn => {
  btn.addEventListener('click', counter)
})

let rangeSlider = document.getElementById('range-slider')
if (rangeSlider) {
  setSlider(rangeSlider)
}

let arrowForward = document.createElement('span')
arrowForward.innerHTML = 'arrow_forward'
arrowForward.classList.add('material-icons', 'subscribe-arrow')

let ctx
if ($('#myChart').length) {
  ctx = document.getElementById('myChart').getContext('2d');
} else {
  ctx = null
}

new Chart(ctx, {
  type: 'doughnut',
  data: chartData,
});

setCalendar()

let dropdownMenu = document.querySelector('.js-dropdown__input_expanded')
let dropdownGuestsMenu = document.querySelector('.js-dropdown__input_guests')
let dropdownCheckboxMenu = document.querySelector('.js-search-room-added-checkbox-list')


let comfortArrow = document.querySelector('.js-dropdown__arrow_comfort')
let guestsArrow = document.querySelector('.js-dropdown-arrow-guests')
let addOptionsArrow = document.querySelector('.js-dropdown__arrow_checkbox')




if (comfortArrow) {
  comfortArrow.parentNode.addEventListener('click', () => changeVisibleElement(dropdownMenu))
}

if (guestsArrow) {
  guestsArrow.parentNode.addEventListener('click', () => changeVisibleElement(dropdownGuestsMenu))
}

if (addOptionsArrow) {
  addOptionsArrow.parentNode.addEventListener('click', () => changeVisibleElement(dropdownCheckboxMenu))
}


// let pageClassesList = [
//   '.js-color-and-type',
//   '.js-forms-elements-page',
//   '.js-cards-page__wrapper',
//   '.js-header-footer-page__wrapper',
//   '.js-landing-page__wrapper',
//   '.js-search-room__wrapper',
//   '.js-room-details-wrapper',
//   '.js-registration-page__wrapper',
//   '.js-sign-in-page__wrapper',
//   '.js-navigate-wrapper'
// ]



// let showColorAndTypesPageBtn = document.querySelector('.js-navigate-item-link_page_color-type')

// function changeVisiblePage(pageClass) {
//   let page = document.querySelector(pageClass)
//   for (let i = 0; i < pageClassesList.length; i++) {
//     document.querySelector(pageClassesList[i]).classList.add('hidden-page')
//   }
//   page.classList.toggle('hidden-page')
// }


// if (showColorAndTypesPageBtn) {
//   showColorAndTypesPageBtn.addEventListener('click', () => changeVisiblePage('.js-color-and-type'))
// }

// let showFormElPageBtn = document.querySelector('.js-navigate-item-link_page_form-elements')

// if (showFormElPageBtn) {
//   showFormElPageBtn.addEventListener('click', () => changeVisiblePage('.js-forms-elements-page'))
// }

// let showCardsPageBtn = document.querySelector('.js-navigate-item-link_page_cards')

// if (showCardsPageBtn) {
//   showCardsPageBtn.addEventListener('click', () => changeVisiblePage('.js-cards-page__wrapper'))
// }

// let showHeadersAndFooterBtn = document.querySelector('.js-navigate-item-link_page_header-footer')

// if (showHeadersAndFooterBtn) {
//   showHeadersAndFooterBtn.addEventListener('click', () => changeVisiblePage('.js-header-footer-page__wrapper'))
// }

// let showLandingPageBtn = document.querySelector('.js-navigate-item-link_page_landing')

// if (showLandingPageBtn) {
//   showLandingPageBtn.addEventListener('click', () => changeVisiblePage('.js-landing-page__wrapper'))
// }

// let showSearchRoomPageBtn = document.querySelector('.js-navigate-item-link_page_search')

// if (showSearchRoomPageBtn) {
//   showSearchRoomPageBtn.addEventListener('click', () => changeVisiblePage('.js-search-room__wrapper'))
// }

// let showRoomDetailsPageBtn = document.querySelector('.js-navigate-item-link_page_room-details')

// if (showRoomDetailsPageBtn) {
//   showRoomDetailsPageBtn.addEventListener('click', () => changeVisiblePage('.js-room-details-wrapper'))
// }

// let showSingUpPageBtn = document.querySelector('.js-navigate-item-link_page_sing-up')

// if (showSingUpPageBtn) {
//   showSingUpPageBtn.addEventListener('click', () => changeVisiblePage('.js-registration-page__wrapper'))
// }

// let showSingInPageBtn = document.querySelector('.js-navigate-item-link_page_sign-in')

// if (showSingInPageBtn) {
//   showSingInPageBtn.addEventListener('click', () => changeVisiblePage('.js-sign-in-page__wrapper'))
// }


