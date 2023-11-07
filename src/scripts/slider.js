import noUiSlider from 'nouislider'

export const setSlider = (sliderElement) => {
  noUiSlider.create(sliderElement, {
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
  sliderElement.noUiSlider.on('update', function (values, handle) {
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