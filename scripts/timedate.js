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

  str +=
    months[clock.getMonth()] +
    " " +
    now.getDate() +
    nth(now.getDate()) +
    ", " +
    clock.getFullYear() +
    " | " +
    ("0" + (now.getHours() % 12) || 12).slice(-2) +
    ":" +
    ("0" + now.getMinutes()).slice(-2);
  document.getElementById("date").innerHTML = str;
}
setInterval(doDate, 1000);
doDate();

// Append the nth day
function nth(n) {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
}
