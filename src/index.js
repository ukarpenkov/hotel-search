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