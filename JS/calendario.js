document.getElementById('news').addEventListener("click", showCalendar)
function showCalendar(){
    $('calendar').show()
}

var inst = mobiscroll.eventcalendar('#demo-responsive-month-view', {
    theme: 'windows',
    themeVariant: 'light',
    display: 'inline',
    calendarHeight: 513,
    view: {
        calendar: {
            labels: true,
            popover: true
        }
    }
});

mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', function (events) {
    inst.setEvents(events);
}, 'jsonp');