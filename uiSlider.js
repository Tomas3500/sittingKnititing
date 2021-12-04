var paddingSlider = document.getElementById('slider-padding');
var paddingMin = document.getElementById('slider-padding-value-min');
var paddingMax = document.getElementById('slider-padding-value-max');

// noUiSlider.on('slider',(values) =>  {
//     console.log(values)
// })

noUiSlider.create(paddingSlider, {
    start: [0, 2533],
    connect: true,
    range: {
        'min': 0,
        'max': 2533
    },


});

paddingSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        paddingMax.value = Math.trunc(values[handle]);
    } else {
        paddingMin.value = Math.trunc(values[handle]);
    }
});
