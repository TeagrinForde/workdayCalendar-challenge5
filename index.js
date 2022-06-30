var displayTimeEl = $('#currentDay');
var day = $('#calendarDay');

function displayTime() {
    var today = moment().format("MMM Do, YYYY");
    displayTimeEl.text(today);
};
displayTime();

//-----------------------

