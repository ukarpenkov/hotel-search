import './styles/index.scss'

import $ from "jquery"
import noUiSlider from 'nouislider'
import flatpickr from 'flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"
import Chart from 'chart.js/auto';
import { counter } from './scripts/counter'
import { setSlider } from './scripts/slider'
import { changeVisibleElement } from './scripts/changeVisibleElement'


let counterButtons = document.querySelectorAll('.js-dropdown-counter__btn')
let inputs = document.querySelectorAll('.js-dropdown__input-text')




counterButtons.forEach(btn => {
  btn.addEventListener('click', counter)
})


var rangeSlider = document.getElementById('range-slider')
if (rangeSlider) {
  setSlider(rangeSlider)
}



var arrowForward = document.createElement('span')
arrowForward.innerHTML = 'arrow_forward'
arrowForward.classList.add('material-icons', 'subscribe-arrow')



let ctx
if ($('#myChart').length) {
  ctx = document.getElementById('myChart').getContext('2d');
} else {
  ctx = null
}
const data = {
  labels: [],
  datasets: [{
    label: 'My First Dataset',
    data: [25, 25, 50],
    borderWidth: 35,
    borderJoinStyle: 'miter',
    spacing: 1,
    hoverBorderWidth: 30,

    hoverBorderColor: 'white',
    backgroundColor: [
      '#bc9cff',
      '#6FCF97',
      '#FFE39C'
    ],
    hoverOffset: 0,
  }]
};

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,

});

flatpickr(".calendar", {
  mode: 'multiple',
  altInput: true,
  altFormat: "d.m.Y",
  dateFormat: "Y-m-d\\Z",
  "locale": Russian,
  nextArrow: `<span class='material-icons subscribe-arrow' style='left:0px' >arrow_forward</span>`,
  prevArrow: `<span class='material-icons subscribe-arrow' style='left:0px' >arrow_back</span>`
}
);

flatpickr(".visible-calendar", {
  inline: true,
  mode: "range",
  altInput: true,
  altFormat: "d.m.Y",
  dateFormat: "Y-m-d\\Z",
  "locale": Russian,
  nextArrow: `<span class='material-icons subscribe-arrow' style='left:0px' >arrow_forward</span>`,
  prevArrow: `<span class='material-icons subscribe-arrow' style='left:0px' >arrow_back</span>`
}
);

var calendarInput = document.querySelectorAll('.flatpickr-calendar')

calendarInput.forEach(item => {
  let applyBtn = document.createElement('p')
  applyBtn.classList.add('calendar_apply-btn', 'apply-btn')
  applyBtn.innerHTML = 'ПРИМЕНИТЬ'
  let clearBtn = document.createElement('p')
  clearBtn.classList.add('calendar_clear-btn', 'clear-btn')
  clearBtn.innerHTML = 'ОЧИСТИТЬ'
  item.appendChild(clearBtn)
  item.appendChild(applyBtn)
})



var dropdownMenu = document.querySelector('.js-dropdown__input_expanded')
var dropdownGuestsMenu = document.querySelector('.js-dropdown__input_guests')
var dropdownCheckboxMenu = document.querySelector('.js-search-room-added-checkbox-list')
// var dropdownGuestsMenuLanding = document.querySelector('.dropdown-landing-guests')


var comfortArrow = document.querySelector('.js-dropdown__arrow_comfort')
var guestsArrow = document.querySelector('.js-dropdown-arrow-guests')
var addOptionsArrow = document.querySelector('.js-dropdown__arrow_checkbox')
var guestsArrowLanding = document.querySelector('.dropdown-arrow-guests-lp')



if (comfortArrow) {
  comfortArrow.addEventListener('click', () => changeVisibleElement(dropdownMenu))
}

if (guestsArrow) {
  console.log(guestsArrow)
  console.log(dropdownGuestsMenu)
  guestsArrow.addEventListener('click', () => changeVisibleElement(dropdownGuestsMenu))
}

if (addOptionsArrow) {
  addOptionsArrow.addEventListener('click', () => changeVisibleElement(dropdownCheckboxMenu))
}
if (guestsArrowLanding) {
  guestsArrowLanding.addEventListener('click', () => changeVisibleElement(dropdownGuestsMenuLanding))
}



let pageClassesList = [
  '.js-color-and-type',
  '.js-forms-elements-page',
  '.js-cards-page__wrapper',
  '.js-header-footer-page__wrapper',
  '.js-landing-page__wrapper',
  '.js-search-room__wrapper',
  '.js-room-details-wrapper',
  '.js-registration-page__wrapper',
  '.js-sign-in-page__wrapper',
  '.js-navigate-wrapper'
]


function changeVisiblePage(pageClass) {
  let page = document.querySelector(pageClass)
  for (let i = 0; i < pageClassesList.length; i++) {
    document.querySelector(pageClassesList[i]).classList.add('hidden-page')
  }
  page.classList.toggle('hidden-page')
}

let showColorAndTypesPageBtn = document.querySelector('.js-navigate-item-link_page_color-type')

if (showColorAndTypesPageBtn) {
  showColorAndTypesPageBtn.addEventListener('click', () => changeVisiblePage('.js-color-and-type'))
}

let showFormElPageBtn = document.querySelector('.js-navigate-item-link_page_form-elements')

if (showFormElPageBtn) {
  showFormElPageBtn.addEventListener('click', () => changeVisiblePage('.js-forms-elements-page'))
}

let showCardsPageBtn = document.querySelector('.js-navigate-item-link_page_cards')

if (showCardsPageBtn) {
  showCardsPageBtn.addEventListener('click', () => changeVisiblePage('.js-cards-page__wrapper'))
}

let showHeadersAndFooterBtn = document.querySelector('.js-navigate-item-link_page_header-footer')

if (showHeadersAndFooterBtn) {
  showHeadersAndFooterBtn.addEventListener('click', () => changeVisiblePage('.js-header-footer-page__wrapper'))
}

let showLandingPageBtn = document.querySelector('.js-navigate-item-link_page_landing')

if (showLandingPageBtn) {
  showLandingPageBtn.addEventListener('click', () => changeVisiblePage('.js-landing-page__wrapper'))
}

let showSearchRoomPageBtn = document.querySelector('.js-navigate-item-link_page_search')

if (showSearchRoomPageBtn) {
  showSearchRoomPageBtn.addEventListener('click', () => changeVisiblePage('.js-search-room__wrapper'))
}

let showRoomDetailsPageBtn = document.querySelector('.js-navigate-item-link_page_room-details')

if (showRoomDetailsPageBtn) {
  showRoomDetailsPageBtn.addEventListener('click', () => changeVisiblePage('.js-room-details-wrapper'))
}

let showSingUpPageBtn = document.querySelector('.js-navigate-item-link_page_sing-up')

if (showSingUpPageBtn) {
  showSingUpPageBtn.addEventListener('click', () => changeVisiblePage('.js-registration-page__wrapper'))
}

let showSingInPageBtn = document.querySelector('.js-navigate-item-link_page_sign-in')

if (showSingInPageBtn) {
  showSingInPageBtn.addEventListener('click', () => changeVisiblePage('.js-sign-in-page__wrapper'))
}


