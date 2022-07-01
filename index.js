var displayTimeEl = $('#currentDay');
var day = $('#calendarDay');

function displayTime() {
    var today = moment().format("MMM Do, YYYY");
    displayTimeEl.text(today);
};
displayTime();

//-----------------------
$(document).ready(function() {
    $('.saveBtn9').click(function () {
        var textContent = $('.event9').val();
        $('.event9').html(textContent);
        alert ('Your even has been saved');
    });
});