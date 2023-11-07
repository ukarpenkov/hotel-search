export function counter() {
  let direction = this.dataset.direction
  let value = this.parentElement.querySelector('.js-dropdown-counter__value')
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