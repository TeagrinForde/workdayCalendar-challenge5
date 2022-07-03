var displayTimeEl = $('#currentDay');
var day = $('#calendarDay');

function displayTime() {
    var today = moment().format("MMM Do, YYYY");
    displayTimeEl.text(today);
};
displayTime();

//-----------------------
var currentTime = moment().hour();
var b = [$('.row')]; //reference p value
console.log(b);
console.log(currentTime);

//time color change



//-----------------------

