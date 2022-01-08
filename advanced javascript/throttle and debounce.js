// Throttling
var timer;
function throttleApi(data) {
  if (timer) return;
  timer = setTimeout(() => {
    console.log("throttle API call " + data);
    timer = undefined;
  }, 1000);
}

// Debounce
function debounceApi(data) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("debounce API call " + data);
  }, 1000);
}

var counter = 1;
setInterval((val) => throttleApi(counter++), 100);
