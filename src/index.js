import './styles/index.scss'
import $ from "jquery"


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



let counterButtons = document.querySelectorAll('.counter__btn')



counterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        let direction = this.dataset.direction
        let value = this.parentElement.querySelectorAll('.dropdown-counter__value')

        let currentValue = +value.innerHTML
        let newValue

        if (direction === 'plus') {
            newValue = currentValue + 1
            console.log('+++')
        } else {
            newValue = currentValue - 1
            console.log('--')
        }

        value.innerHTML = newValue
    })
})