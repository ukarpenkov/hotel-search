let maskedDateInput = document.querySelector('.js-date-input')

console.log(maskedDateInput)

function dateInputMask(elm) {
  console.log('check35 ')
  elm.addEventListener('keypress', function (e) {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    let len = elm.value.length;

    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        e.preventDefault();
      }
    }

    if (len === 2) {
      elm.value += '/';
    }

    if (len === 5) {
      elm.value += '/';
    }
  });
};

dateInputMask(maskedDateInput);