import './styles/index.scss'
import $ from "jquery"
import noUiSlider from 'nouislider'
import flatpickr from 'flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"


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

var comfortArrow = document.querySelector('.dropdown__arrow_comfort')

function hideAndShowElement(element) {
    element.classList.toggle('hidden')
}

comfortArrow.addEventListener('click', () => hideAndShowElement(dropdownMenu))

