


export function calendar() {
  return
}

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