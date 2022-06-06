import './styles/index.scss'
import $ from "jquery"
import noUiSlider from 'nouislider'
import flatpickr from 'flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"

import Chart from 'chart.js/auto';


const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'IURII',
    age: '31',
    ...userStack
}


$('.block').html('jQuery is working');

console.log(user)



let counterButtons = document.querySelectorAll('.dropdown-counter__btn')
let inputs = document.querySelectorAll('.dropdown__input-text')

function counter() {
    let direction = this.dataset.direction
    let value = this.parentElement.querySelector('.dropdown-counter__value')

    let currentValue = +value.innerHTML
    let newValue

    if (direction === 'plus') {
        newValue = currentValue + 1
        console.log('+++')
    }
    else {
        newValue = currentValue - 1
        console.log('--')
        if (currentValue === 0) {
            newValue = 0
        }
    }
    value.innerHTML = newValue

}



counterButtons.forEach(btn => {
    btn.addEventListener('click', counter)
})

var rangeSlider = document.getElementById('range-slider')

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 100000],
        connect: true,
        step: 1,
        range: {
            'min': [0],
            'max': 100000
        }
    });

    const input0 = document.getElementById('input-0')
    const input1 = document.getElementById('input-1')
    let inputs = [input0, input1]
    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle])
    })

    var setRangeSlider = (i, value) => {
        let arr = [null, null]
        arr[i] = value

        rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
        })
    })

}

var arrowForward = document.createElement('span')
arrowForward.innerHTML = 'arrow_forward'
arrowForward.classList.add('material-icons', 'subscribe-arrow')


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



var calendar = document.querySelectorAll('.flatpickr-calendar')

console.log(calendar)
calendar.forEach(item => {
    let applyBtn = document.createElement('p')
    applyBtn.classList.add('calendar_apply-btn', 'apply-btn')
    applyBtn.innerHTML = 'ПРИМЕНИТЬ'
    let clearBtn = document.createElement('p')
    clearBtn.classList.add('calendar_clear-btn', 'clear-btn')
    clearBtn.innerHTML = 'ОЧИСТИТЬ'
    item.appendChild(clearBtn)
    item.appendChild(applyBtn)
})



var dropdownMenu = document.querySelector('.dropdown__input_expanded')
var dropdownGuestsMenu = document.querySelector('.dropdown__input_guests')
var dropdownCheckboxMenu = document.querySelector('.search-room-added-checkbox-list')

var comfortArrow = document.querySelector('.dropdown__arrow_comfort')
var guestsArrow = document.querySelector('.dropdown-arrow-guests')
var addOptionsArrow = document.querySelector('.dropdown__arrow_checkbox')

function hideAndShowElement(element) {
    element.classList.toggle('hidden')
}

if (comfortArrow) {
    comfortArrow.addEventListener('click', () => hideAndShowElement(dropdownMenu))
}

if (guestsArrow) {
    guestsArrow.addEventListener('click', () => hideAndShowElement(dropdownGuestsMenu))
}

if (addOptionsArrow) {
    addOptionsArrow.addEventListener('click', () => hideAndShowElement(dropdownCheckboxMenu))
}


let pageClassesList = [
    '.color-and-type',
    '.forms-elements-page',
    '.cards-page__wrapper',
    '.header-footer-page__wrapper',
    '.landing-page__wrapper',
    '.search-room__wrapper',
    '.room-details-wrapper',
    '.registration-page__wrapper',
    '.sign-in-page__wrapper',
    '.navigate-wrapper'
]


function hideAndShowPage(pageClass) {
    let page = document.querySelector(pageClass)
    for (let i = 0; i < pageClassesList.length; i++) {
        document.querySelector(pageClassesList[i]).classList.add('hidden-page')
    }
    page.classList.toggle('hidden-page')
}

let showColorAndTypesPageBtn = document.querySelector('.navigate-item-link_page_color-type')

if (showColorAndTypesPageBtn) {
    showColorAndTypesPageBtn.addEventListener('click', () => hideAndShowPage('.color-and-type'))
}

let showFormElPageBtn = document.querySelector('.navigate-item-link_page_form-elements')

if (showFormElPageBtn) {
    showFormElPageBtn.addEventListener('click', () => hideAndShowPage('.forms-elements-page'))
}

let showCardsPageBtn = document.querySelector('.navigate-item-link_page_cards')

if (showCardsPageBtn) {
    showCardsPageBtn.addEventListener('click', () => hideAndShowPage('.cards-page__wrapper'))
}

let showHeadersAndFooterBtn = document.querySelector('.navigate-item-link_page_header-footer')

if (showHeadersAndFooterBtn) {
    showHeadersAndFooterBtn.addEventListener('click', () => hideAndShowPage('.header-footer-page__wrapper'))
}

let showLandingPageBtn = document.querySelector('.navigate-item-link_page_landing')

if (showLandingPageBtn) {
    showLandingPageBtn.addEventListener('click', () => hideAndShowPage('.landing-page__wrapper'))
}

let showSearchRoomPageBtn = document.querySelector('.navigate-item-link_page_search')

if (showSearchRoomPageBtn) {
    showSearchRoomPageBtn.addEventListener('click', () => hideAndShowPage('.search-room__wrapper'))
}

let showRoomDetailsPageBtn = document.querySelector('.navigate-item-link_page_room-details')

if (showRoomDetailsPageBtn) {
    showRoomDetailsPageBtn.addEventListener('click', () => hideAndShowPage('.room-details-wrapper'))
}

let showSingUpPageBtn = document.querySelector('.navigate-item-link_page_sing-up')

if (showSingUpPageBtn) {
    showSingUpPageBtn.addEventListener('click', () => hideAndShowPage('.registration-page__wrapper'))
}

let showSingInPageBtn = document.querySelector('.navigate-item-link_page_sing-in')

if (showSingInPageBtn) {
    showSingInPageBtn.addEventListener('click', () => hideAndShowPage('.sign-in-page__wrapper'))
}

console.log('js is done')
