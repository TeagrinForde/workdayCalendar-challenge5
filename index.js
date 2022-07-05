var displayTimeEl = $('#currentDay');
var day = $('#calendarDay');

function displayTime() {
    var today = moment().format("LLLL");
    displayTimeEl.text(today);
};
displayTime();

//-----------------------
var currentTime = moment().hour();        //current time from momentjs

function timeTracker() {                  //highlight row based on time
    $('.time-block').each(function () {
        var colorTime = parseInt($(this).attr('id').split('hour')[1]);

        if (colorTime < currentTime) {            //past
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (colorTime === currentTime) {   //present
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {                                  //future
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        };
    });
}
timeTracker();
//-----------------------
var saveButton = document.querySelector('.saveBtn');

localStorage.nine = $('#hour-9.event').val(localStorage.getItem('hour-9'));
document.getElementById('hour-9').innerHTML = localStorage.nine;

$('#hour-10.event').val(localStorage.getItem('hour-10'));
$('#hour-11.event').val(localStorage.getItem('hour-11'));
$('#hour-12.event').val(localStorage.getItem('hour-12'));
$('#hour-1.event').val(localStorage.getItem('hour-1'));
$('#hour-2.event').val(localStorage.getItem('hour-2'));
$('#hour-3.event').val(localStorage.getItem('hour-3'));
$('#hour-4.event').val(localStorage.getItem('hour-4'));
$('#hour-5.event').val(localStorage.getItem('hour-5'));

function saveInput(event) {
    event.preventDefault();
    var eventInputEl = document.querySelector('.event').value;
    localStorage.setItem('eventInputEl', eventInputEl);
    console.log(eventInputEl);
    document.getElementsByClassName('event').innerHTML = localStorage.getItem('eventInputEl');
}

saveButton.addEventListener('click', saveInput);