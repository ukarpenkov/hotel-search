import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"


export function setCalendar() {
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
}

