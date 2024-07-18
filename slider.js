$("#slider-3").slider({
  range: true,
  min: 0,
  max: 700000,
  values: [100000, 500000],
  slide: function (event, ui) {
    $(".min").text(ui.values[0]);
    $(".max").text(ui.values[1]);
  },
});
