function doDate() {
  var str = "";
  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var clock = new Date();
  var now = new Date();

  // Get the hour and determine AM or PM
  var hours = now.getHours();
  var ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  var hour12 = hours % 12;
  hour12 = hour12 ? hour12 : 12; // The hour '0' should be '12'

  // Format the time string
  str +=
    months[clock.getMonth()] +
    " " +
    now.getDate() +
    nth(now.getDate()) +
    ", " +
    clock.getFullYear() +
    " | " +
    ("0" + hour12).slice(-2) +
    ":" +
    ("0" + now.getMinutes()).slice(-2) +
    " " +
    ampm;

  document.getElementById("date").innerHTML = str;
}

setInterval(doDate, 1000);
doDate();

// Append the nth day
function nth(n) {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
}
