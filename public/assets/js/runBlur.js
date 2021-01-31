var state = false;

function runBlur() {
  if (state == true) {
    state = false;
    $("div:first").removeClass("active");
    $("div:first").addClass("inactive");
  } else {
    state = true;
    $("div:first").removeClass("inactive");
    $("div:first").addClass("active");
  }
}
